import { useMemo, useState } from "react";
import cfopData from "../data/cfop-algorithms.json";
import { FormulaViewer } from "./InteractiveFormulaList";

type Category = "F2L" | "OLL" | "PLL";

interface FormulaCase {
  name: string;
  group: string;
  setup: string;
  standard: string;
}

const categories = cfopData.categories as Record<Category, FormulaCase[]>;
const pageSize = 12;

export function FormulaLibrary() {
  const [category, setCategory] = useState<Category>("F2L");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const [activeCase, setActiveCase] = useState<string | null>(null);

  const filteredCases = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return categories[category];
    return categories[category].filter((item) =>
      [item.name, item.group, item.standard, item.setup].some((value) => value.toLowerCase().includes(term)),
    );
  }, [category, query]);

  const pageCount = Math.max(1, Math.ceil(filteredCases.length / pageSize));
  const visibleCases = filteredCases.slice(page * pageSize, (page + 1) * pageSize);

  const chooseCategory = (nextCategory: Category) => {
    setCategory(nextCategory);
    setQuery("");
    setPage(0);
    setActiveCase(null);
  };

  const updateQuery = (value: string) => {
    setQuery(value);
    setPage(0);
    setActiveCase(null);
  };

  return (
    <section className="library-view" aria-labelledby="library-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">CFOP ALGORITHM LIBRARY</p>
          <h2 id="library-title">完整 CFOP 公式库</h2>
        </div>
        <span className="library-total">119 cases</span>
      </div>

      <div className="library-summary" aria-label="公式分类数量">
        <div><strong>41</strong><span>F2L</span></div>
        <div><strong>57</strong><span>OLL</span></div>
        <div><strong>21</strong><span>PLL</span></div>
      </div>

      <div className="library-controls">
        <div className="library-tabs" role="tablist" aria-label="公式分类">
          {(["F2L", "OLL", "PLL"] as const).map((item) => (
            <button key={item} role="tab" aria-selected={category === item} className={category === item ? "active" : ""} onClick={() => chooseCategory(item)}>
              {item} <span>{cfopData.counts[item]}</span>
            </button>
          ))}
        </div>
        <label className="library-search">
          <span>搜索</span>
          <input value={query} onChange={(event) => updateQuery(event.target.value)} placeholder="case、分组或公式" />
        </label>
      </div>

      <div className="formula-table" role="tabpanel">
        <div className="formula-table-head" aria-hidden="true">
          <span>Case</span><span>还原公式</span><span>Setup 打乱</span><span>预览</span>
        </div>
        {visibleCases.map((item) => {
          const caseId = `${category}-${item.name}`;
          const isActive = activeCase === caseId;
          return (
            <article className={isActive ? "formula-entry expanded" : "formula-entry"} key={caseId}>
              <div className="case-identity"><strong>{item.name}</strong><span>{item.group}</span></div>
              <div className="formula-value"><small>还原公式</small><code>{item.standard}</code></div>
              <div className="formula-value"><small>Setup 打乱</small><code>{item.setup}</code></div>
              <button className="preview-toggle" onClick={() => setActiveCase(isActive ? null : caseId)} aria-expanded={isActive}>
                {isActive ? "收起" : "3D 预览"}
              </button>
              {isActive && (
                <div className="library-viewer">
                  <FormulaViewer sequence={item.standard} sequenceType="case" setupSequence={item.setup} />
                </div>
              )}
            </article>
          );
        })}
        {visibleCases.length === 0 && <p className="empty-results">没有匹配的公式。</p>}
      </div>

      <div className="library-footer">
        <a href={cfopData.sourceUrl} target="_blank" rel="noreferrer">数据来源：{cfopData.source}</a>
        <div className="pagination" aria-label="公式分页">
          <button title="上一页" aria-label="上一页" disabled={page === 0} onClick={() => { setPage((value) => value - 1); setActiveCase(null); }}>←</button>
          <span>{page + 1} / {pageCount}</span>
          <button title="下一页" aria-label="下一页" disabled={page >= pageCount - 1} onClick={() => { setPage((value) => value + 1); setActiveCase(null); }}>→</button>
        </div>
      </div>
    </section>
  );
}
