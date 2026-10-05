# Parallel Computing Workshop Presentation Series
## Interactive Animated Workshop: Day 1 (OpenMP) & Day 2 (MPI)

> A premium, interactive, animated educational web presentation for technical workshops teaching **Parallel Computing** with **OpenMP** and **MPI**.

Built with **React**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Recharts**.

---

## 🍳 The Continuous Analogy: Restaurant Kitchen

The workshop maintains a continuous real-world analogy across both days:

### Day 1 — OpenMP: Inside One Kitchen
- **Restaurant / Kitchen** = Computer / Shared Memory Space
- **Kitchen Manager** = OpenMP Runtime
- **Chefs** = Threads sharing the kitchen workspace
- **Order Tickets** = Tasks / Loop Iterations
- **Shared Oven** = Shared Resource / Critical Section
- **Chefs Waiting in Line** = Thread Synchronization / Locks
- **Counter Mismatch** = Race Condition

### Day 2 — MPI: Independent Branch Kitchens
- **Multiple Kitchens (A, B, C, D)** = Distributed Computers / Processes
- **Kitchen ID Number** = MPI Rank (`0, 1, 2, ...`)
- **Pantry & Shelf** = Private, Isolated Process RAM
- **Courier Delivery** = Point-to-Point Message Passing (`MPI_Send` / `MPI_Recv`)
- **All-Hands Announcement** = Broadcast (`MPI_Bcast`)
- **Ingredient Batching** = Scatter (`MPI_Scatter`)
- **Dish Consolidation** = Gather (`MPI_Gather`)
- **Total Revenue Aggregation** = Reduce (`MPI_Reduce`)
- **Mutual Delivery Deadlock** = MPI Deadlock

---

## ✨ Features

- **155 Total Interactive Slides**:
  - **Day 1: OpenMP** (60 Slides): CPU Cores, Threads, Shared Memory, Fork-Join, `#pragma omp parallel`, `parallel for`, Race Conditions, Speedup, Amdahl's Law, Labs 1–4.
  - **Day 2: MPI** (95 Slides): Distributed Memory, Processes, Ranks, Communicators (`MPI_COMM_WORLD`), Point-to-Point Messaging, Collectives (`Bcast`, `Scatter`, `Gather`, `Reduce`, `Allreduce`, `Barrier`, `Alltoall`), Deadlock hazards, Cluster Architecture, MPI + OpenMP Hybrid Supercomputing, Labs 1–9.
- **26 Visual Animated Simulators**:
  - `ProcessVisualizer`: Multi-process isolated address spaces and private memory scaling (1, 2, 4, 8 ranks).
  - `MessageAnimation`: Interactive envelope transit with parameter callouts (Source, Dest, Tag, Type, Communicator).
  - `BroadcastSimulator`: `MPI_Bcast` (1 $\to$ ALL).
  - `ScatterSimulator`: `MPI_Scatter` (array chunk partitioning).
  - `GatherSimulator`: `MPI_Gather` (distributed array aggregation).
  - `ReduceSimulator`: `MPI_Reduce` (`MPI_SUM`, `MPI_MAX`, `MPI_MIN`, `MPI_PROD`).
  - `DeadlockSimulator`: Circular wait visualizer with warning and non-blocking solution toggle.
  - `DistributedPerformanceSimulator`: Speedup, parallel efficiency, and Amdahl scaling.
  - `MPIHybridScene`: Hierarchical cluster with MPI across nodes + OpenMP within nodes.
  - `RaceConditionSimulator`, `CPUChip`, `KitchenScene`, `ForkJoinAnimation`, and more.
- **Dual Module Selector**: Interactive start screen allowing instant selection between Day 1 (OpenMP) and Day 2 (MPI).
- **Instructor Presenter Mode (`P` key)**: Slide-in drawer with hidden speaker notes, discussion questions, and next-slide previews.
- **16:9 Projector Optimized**: Built for 1920 × 1080 display standards.

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|---|---|
| `→` or `Space` | Next Slide |
| `←` | Previous Slide |
| `Home` | First Slide (Slide 01) |
| `End` | Last Slide |
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

### Run Locally (Dev Server)

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

### Day 1 — OpenMP (60 Slides)
1. Section 1: Opening (Slides 01–08)
2. Section 2: CPU Architecture (Slides 09–12)
3. Section 3: Process & Thread (Slides 13–16)
4. Section 4: Meet OpenMP (Slides 17–19)
5. Section 5: Fork-Join Model (Slides 20–23)
6. Section 6: First Program (Slides 24–32)
7. Section 7: Thread Control (Slides 33–36)
8. Section 8: Parallel For (Slides 37–40)
9. Section 9: Race Conditions (Slides 41–43)
10. Section 10: Performance (Slides 44–47)
11. Section 11: Amdahl's Law (Slides 48–49)
12. Section 12: Practical Labs (Slides 50–56)
13. Section 13: Wrap-Up & Day 2 (Slides 57–60)

### Day 2 — MPI (95 Slides)
1. Chapter 01: Why MPI? (Slides 01–12)
2. Chapter 02: MPI Fundamentals (Slides 13–24)
3. Chapter 03: First MPI Program (Slides 25–31)
4. Chapter 04: Message Passing (Slides 32–40)
5. Chapter 05: Collective Communication (Slides 41–53)
6. Chapter 06: Synchronization & Deadlock (Slides 54–58)
7. Chapter 07: Distributed Computing (Slides 59–63)
8. Chapter 08: MPI Performance (Slides 64–71)
9. Chapter 09: MPI + OpenMP Hybrid (Slides 72–75)
10. Chapter 10: Practical Labs 1–9 (Slides 76–84)
11. Chapter 11: Final Challenge & Wrap-Up (Slides 85–95)

---

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Charts**: Recharts
- **Icons**: Lucide React
- **Syntax Highlighting**: PrismJS
