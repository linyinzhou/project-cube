import { useEffect, useRef, useState } from "react";

type SequenceType = "scramble" | "case";
type ViewerMode = "state" | "playback";

interface FormulaViewerProps {
  sequence: string;
  sequenceType: SequenceType;
}

interface InteractiveFormulaListProps {
  items: readonly string[];
  sequenceType?: SequenceType;
}

function FormulaViewer({ sequence, sequenceType }: FormulaViewerProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<ViewerMode>("state");
  const [loadState, setLoadState] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let disposed = false;
    const host = hostRef.current;
    setLoadState("loading");

    void import("cubing/twisty")
      .then(({ TwistyPlayer }) => {
        if (disposed || !host) return;

        const isCase = sequenceType === "case";
        const isPlayback = mode === "playback";
        const player = new TwistyPlayer({
          puzzle: "3x3x3",
          alg: isCase || isPlayback ? sequence : "",
          experimentalSetupAlg: isCase || isPlayback ? "x2 y2" : `x2 y2 ${sequence}`,
          experimentalSetupAnchor: isCase ? "end" : "start",
          visualization: "3D",
          background: "none",
          controlPanel: mode === "playback" ? "bottom-row" : "none",
          experimentalDragInput: "auto",
          hintFacelets: "none",
          cameraLatitude: 24,
          cameraLongitude: 32,
          tempoScale: 1.25,
        });

        player.setAttribute("aria-label", sequenceType === "case" ? "公式执行前的魔方状态" : "执行打乱后的魔方状态");
        host.replaceChildren(player);
        setLoadState("ready");
      })
      .catch(() => {
        if (!disposed) setLoadState("error");
      });

    return () => {
      disposed = true;
      host?.replaceChildren();
    };
  }, [mode, sequence, sequenceType]);

  return (
    <div className="formula-viewer">
      <div className="viewer-toolbar" role="group" aria-label="魔方预览模式">
        <button className={mode === "state" ? "active" : ""} onClick={() => setMode("state")} aria-pressed={mode === "state"}>
          {sequenceType === "case" ? "查看 case" : "打乱后状态"}
        </button>
        <button className={mode === "playback" ? "active" : ""} onClick={() => setMode("playback")} aria-pressed={mode === "playback"}>
          动画播放
        </button>
        <span>黄顶 · 白底 · 绿前</span>
      </div>
      <div className="twisty-stage" aria-busy={loadState === "loading"}>
        <div className="twisty-host" ref={hostRef} />
        {loadState === "loading" && <p className="viewer-status">正在加载 3D 魔方...</p>}
        {loadState === "error" && <p className="viewer-status">3D 预览加载失败，请刷新页面重试。</p>}
      </div>
      <p className="viewer-note">拖动魔方可查看隐藏面。动画模式可以播放、暂停和逐步回看。</p>
    </div>
  );
}

export function InteractiveFormulaList({ items, sequenceType = "scramble" }: InteractiveFormulaListProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <ol className="scramble-list">
      {items.map((sequence, index) => {
        const isActive = activeIndex === index;
        return (
          <li className={isActive ? "expanded" : ""} key={sequence}>
            <span>{index + 1}</span>
            <code>{sequence}</code>
            <button className="preview-toggle" onClick={() => setActiveIndex(isActive ? null : index)} aria-expanded={isActive} aria-controls={`formula-viewer-${index}`}>
              {isActive ? "收起" : "3D 预览"}
            </button>
            {isActive && (
              <div id={`formula-viewer-${index}`} className="viewer-slot">
                <FormulaViewer sequence={sequence} sequenceType={sequenceType} />
              </div>
            )}
          </li>
        );
      })}
    </ol>
  );
}
