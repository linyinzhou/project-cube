from __future__ import annotations

import json
import re
from argparse import ArgumentParser
from html.parser import HTMLParser
from pathlib import Path
from urllib.request import Request, urlopen


SOURCE_ROOT = "https://www.speedcubedb.com/a/3x3"
OUTPUT = Path(__file__).parents[1] / "web-dashboard" / "src" / "data" / "cfop-algorithms.json"


def normalize_algorithm(value: str) -> str:
    value = value.replace("Standard Alg:", "").replace("setup:", "")
    value = value.replace("(", "").replace(")", "")
    value = re.sub(r"([A-Za-z])2'", r"\g<1>2", value)
    return " ".join(value.split())


class AlgorithmPageParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.cases: list[dict[str, str]] = []
        self.current: dict[str, str] | None = None
        self.case_depth = 0
        self.capture: str | None = None
        self.capture_depth = 0
        self.capture_text: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if tag != "div":
            return

        values = {key: value or "" for key, value in attrs}
        classes = set(values.get("class", "").split())

        if self.current is None and "singlealgorithm" in classes:
            self.current = {
                "name": values["data-alg"],
                "group": values.get("data-subgroup", ""),
            }
            self.case_depth = 1
            return

        if self.current is None:
            return

        self.case_depth += 1
        if "setup-case" in classes:
            self._start_capture("setup")
        elif "scdb-panel" in classes and "standard" not in self.current:
            self._start_capture("standard")
        elif "formatted-alg" in classes and "standard" not in self.current:
            self._start_capture("standard")

    def handle_endtag(self, tag: str) -> None:
        if tag != "div" or self.current is None:
            return

        if self.capture and self.case_depth == self.capture_depth:
            self.current[self.capture] = normalize_algorithm(" ".join(self.capture_text))
            self.capture = None
            self.capture_text = []

        if self.case_depth == 1:
            if self.current.get("setup") and self.current.get("standard"):
                self.cases.append(self.current)
            self.current = None
            self.case_depth = 0
            return

        self.case_depth -= 1

    def handle_data(self, data: str) -> None:
        if self.capture:
            self.capture_text.append(data)

    def _start_capture(self, name: str) -> None:
        self.capture = name
        self.capture_depth = self.case_depth
        self.capture_text = []


def fetch_cases(category: str, input_dir: Path | None) -> list[dict[str, str]]:
    if input_dir:
        page = (input_dir / f"{category}.html").read_text(encoding="utf-8")
    else:
        request = Request(f"{SOURCE_ROOT}/{category}", headers={"User-Agent": "project-cube/1.0"})
        with urlopen(request, timeout=60) as response:
            page = response.read().decode("utf-8")

    parser = AlgorithmPageParser()
    parser.feed(page)
    return parser.cases


def main() -> None:
    argument_parser = ArgumentParser()
    argument_parser.add_argument("--input-dir", type=Path)
    args = argument_parser.parse_args()

    expected = {"F2L": 41, "OLL": 57, "PLL": 21}
    categories = {category: fetch_cases(category, args.input_dir) for category in expected}

    actual = {category: len(cases) for category, cases in categories.items()}
    if actual != expected:
        raise RuntimeError(f"Unexpected case counts: {actual}; expected: {expected}")

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(
        json.dumps(
            {
                "source": "SpeedCubeDB",
                "sourceUrl": f"{SOURCE_ROOT}",
                "counts": expected,
                "categories": categories,
            },
            ensure_ascii=False,
            indent=2,
        )
        + "\n",
        encoding="utf-8",
    )
    print(f"Wrote {sum(actual.values())} cases to {OUTPUT}")


if __name__ == "__main__":
    main()
