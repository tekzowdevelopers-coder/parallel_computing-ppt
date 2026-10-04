# Day 1 — Parallel Computing with OpenMP
## Animated Interactive Workshop Presentation Website

> A premium, interactive, animated educational web presentation for technical workshops teaching **Parallel Computing with OpenMP**.

Built with **React**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Recharts**.

---

## 🍳 The Core Analogy: Restaurant Kitchen

Throughout the 60 slides, OpenMP concepts are explained using the continuous **Restaurant Kitchen** analogy:

| Kitchen | Computing |
|---|---|
| **Restaurant** | Computer / Process |
| **Kitchen Manager** | OpenMP Runtime |
| **Chef** | Thread / Core |
| **Multiple Chefs** | Multiple Threads |
| **Kitchen** | Shared Memory |
| **Order Ticket** | Task / Loop Iteration |
| **Ingredients** | Data / Memory Buffer |
| **Work Distribution** | Scheduling / Work Sharing |
| **Shared Oven** | Shared Resource / Critical Section |
| **Chefs Waiting in Line** | Synchronization / Locks |
| **Counter Mismatch** | Race Condition |

---

## ✨ Features

- **60 Data-Driven Presentation Slides**: Covering fundamentals, CPU architecture, process vs. thread, OpenMP API, fork-join model, syntax (`#pragma omp parallel`, `parallel for`), race conditions, performance measurement, Amdahl's Law, and 4 hands-on labs.
- **17 Interactive & Visual Animated Components**:
  - `KitchenScene`: Animated chef avatars, task queues, and manager.
  - `CPUChip`: Multi-core chip with individually lighting cores.
  - `ThreadVisualizer`: Horizontal thread lanes with moving tasks.
  - `ForkJoinAnimation`: Fork and join sequencing.
  - `RaceConditionSimulator`: Interactive concurrency bug demo with synchronization toggle.
  - `SequentialVsParallel`: Side-by-side execution race with live timers.
  - `CodeEditor`: Syntax-highlighted C code with active line spotlight and callouts.
  - `PerformanceChart`: Interactive Recharts scaling benchmarks.
  - `ConceptMap`: 10-node learning journey graph with sequential lighting.
- **Presenter Mode (`P` key)**: Hidden slide-in drawer for instructors showing speaker cues, discussion questions, and next-slide previews.
- **16:9 Presentation Format**: Designed for 1920 × 1080 projectors and large monitors.

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|---|---|
| `→` or `Space` | Next Slide |
| `←` | Previous Slide |
| `Home` | First Slide (Slide 01) |
| `End` | Last Slide (Slide 60) |
| `F` | Toggle Fullscreen |
| `P` | Toggle Presenter Mode Drawer |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [npm](https://www.npmjs.com/)

### Installation

```bash
git clone https://github.com/tekzowdevelopers-coder/parallel_computing-ppt.git
cd parallel_computing-ppt
npm install
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

The optimized static bundle is output to `dist/`.

---

## 📚 Curriculum Structure

1. **Section 1: Opening** (Slides 01–08) — The 100-order problem, sequential vs. parallel, Kitchen ↔ Computer mapping.
2. **Section 2: CPU Architecture** (Slides 09–12) — Multi-core processors, sequential vs. parallel timers.
3. **Section 3: Process & Thread** (Slides 13–16) — Process boundaries, lightweight threads, shared memory.
4. **Section 4: Meet OpenMP** (Slides 17–19) — OpenMP API architecture, manager model.
5. **Section 5: Fork-Join Model** (Slides 20–23) — Master thread, fork phase, parallel team, join phase.
6. **Section 6: First Program** (Slides 24–32) — `#include <omp.h>`, `#pragma omp parallel`, `omp_get_thread_num()`, non-deterministic thread ordering.
7. **Section 7: Thread Control** (Slides 33–36) — `omp_set_num_threads()`, `OMP_NUM_THREADS`, `omp_get_num_threads()`.
8. **Section 8: Parallel For** (Slides 37–40) — Loop work-sharing, chunk distribution.
9. **Section 9: Race Conditions** (Slides 41–43) — Shared resource hazards, synchronization primitives (`critical`, `atomic`, `barrier`, `reduction`).
10. **Section 10: Performance** (Slides 44–47) — Overheads, `omp_get_wtime()`, speedup calculation, benchmarks.
11. **Section 11: Amdahl's Law** (Slides 48–49) — Bottlenecks, theoretical speedup limits.
12. **Section 12: Practical Labs** (Slides 50–56) — 4 hands-on exercises + performance challenge.
13. **Section 13: Closure & Day 2** (Slides 57–60) — Concept map, summary, MPI preview.

---

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Charts**: Recharts
- **Icons**: Lucide React
- **Syntax Highlighting**: PrismJS
