# Graph Report - almarzan.com  (2026-10-18)

## Corpus Check
- 62 files · ~118,398 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 2 file(s) not represented in the graph (top: (none) 1, .css 1)

## Summary
- 132 nodes · 223 edges · 12 communities (9 shown, 3 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 4 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Project Configuration
- React Dependencies
- UI Library Dependencies
- Coffee Component
- Main Page Components
- Development Dependencies
- Build Scripts
- Assets and HTML
- Cursor Grid Component
- React Initialization
- Icon Assets
- Image Assets

## God Nodes (most connected - your core abstractions)
1. `react` - 21 edges
2. `App()` - 16 edges
3. `@mui/material` - 12 edges
4. `react-icons` - 10 edges
5. `scripts` - 7 edges
6. `Space()` - 6 edges
7. `DepthText()` - 6 edges
8. `TextPressure()` - 6 edges
9. `SplashScreen()` - 5 edges
10. `Wallpaper()` - 5 edges

## Surprising Connections (you probably didn't know these)
- `Main Entry HTML` --references--> `Melancholic Desktop Illustration`  [INFERRED]
  index.html → public/Untitled design.png
- `Main Entry HTML` --references--> `Anime Character Montage Wallpaper`  [INFERRED]
  index.html → public/Wallpaper/marzan.png
- `almarzan.com index page` --references--> `Portfolio favicon`  [EXTRACTED]
  index.html → public/icons8-m-64.png
- `App()` --calls--> `SplashScreen()`  [EXTRACTED]
  src/App.jsx → src/Commpnent/MainPage.jsx
- `App()` --calls--> `Space()`  [EXTRACTED]
  src/App.jsx → src/Commpnent/Space.jsx

## Import Cycles
- None detected.

## Communities (12 total, 3 thin omitted)

### Community 0 - "Project Configuration"
Cohesion: 0.08
Nodes (27): homepage, name, private, type, version, daisyui, @emotion/react, @emotion/styled (+19 more)

### Community 1 - "React Dependencies"
Cohesion: 0.19
Nodes (17): @mui/material, react, react-icons, App(), cursorMediaQuery, getCursorMediaSnapshot(), subscribeToCursorMedia(), About() (+9 more)

### Community 2 - "UI Library Dependencies"
Cohesion: 0.12
Nodes (17): dependencies, daisyui, @emotion/react, @emotion/styled, @headlessui/react, @heroicons/react, @heroui/react, @heroui/styles (+9 more)

### Community 3 - "Coffee Component"
Cohesion: 0.26
Nodes (6): Coffee, Music, Space(), Box, Modal, Wallpaper()

### Community 4 - "Main Page Components"
Cohesion: 0.33
Nodes (9): SplashScreen(), clamp(), DepthText(), getLayerColor(), getTransform(), clamp(), dist(), getAttr() (+1 more)

### Community 5 - "Development Dependencies"
Cohesion: 0.18
Nodes (11): devDependencies, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, gh-pages, globals, @types/react (+3 more)

### Community 6 - "Build Scripts"
Cohesion: 0.29
Nodes (7): scripts, build, deploy, dev, lint, predeploy, preview

### Community 7 - "Assets and HTML"
Cohesion: 0.50
Nodes (4): Main Entry HTML, Melancholic Desktop Illustration, Anime Character Montage Wallpaper, MD Al Marzan Portfolio README

### Community 8 - "Cursor Grid Component"
Cohesion: 0.67
Nodes (3): CursorGrid(), FALLOFF_CURVES, hexToRgb()

## Knowledge Gaps
- **20 isolated node(s):** `@emotion/react`, `@emotion/styled`, `@headlessui/react`, `@heroicons/react`, `@heroui/react` (+15 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 63 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `React Dependencies` to `Project Configuration`, `Coffee Component`, `Main Page Components`, `Cursor Grid Component`, `React Initialization`?**
  _High betweenness centrality (0.375) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `App()` (e.g. with `getCursorMediaSnapshot()` and `subscribeToCursorMedia()`) actually correct?**
  _`App()` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `@emotion/react`, `@emotion/styled`, `@headlessui/react` to the rest of the system?**
  _20 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Project Configuration` be split into smaller, more focused modules?**
  _Cohesion score 0.08045977011494253 - nodes in this community are weakly interconnected._
- **Why does `dependencies` connect `UI Library Dependencies` to `Project Configuration`?**
  _High betweenness centrality (0.217) - this node is a cross-community bridge._
- **Should `UI Library Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._
- **Why does `devDependencies` connect `Development Dependencies` to `Project Configuration`?**
  _High betweenness centrality (0.139) - this node is a cross-community bridge._