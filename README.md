# JifunzeHub: Institutional Operating System

**JifunzeHub** is a production-grade, offline-first educational infrastructure platform designed specifically for Technical and Vocational Education and Training (TVET) institutions operating in low-bandwidth or zero-connectivity environments.

It transitions the traditional Learning Management System (LMS) into a robust **Local Edge Ecosystem**, ensuring continuous learning, administrative governance, and device synchronization regardless of internet availability.

---

## 🌍 The Problem & Our Solution

In many developing regions, consistent internet access is a barrier to digital education. JifunzeHub solves this by pushing the cloud to the edge.

Instead of relying on real-time internet connections, the platform operates on a **Local Server / LAN Architecture** with **Peer-to-Peer (P2P)** synchronization. Devices (laptops, mobile phones, lab PCs) act as autonomous nodes that sync data when in proximity to the institutional network or each other.

---

## 🚀 Core Architectural Features

### 1. Offline-First Synchronization Engine

- **LAN Gateway Syncing:** Devices automatically detect the "JIFUNZE_HUB_MAIN" network and mirror data (courses, assignments, user profiles).
- **Peer-to-Peer Relay:** Students can share encrypted course packages via direct Wi-Fi protocols, drastically reducing the load on the central server.
- **Local Cache Allocation:** Intelligent client-side storage (using IndexedDB/Dexie.js) reserves encrypted space for offline curriculum access.

### 2. Role-Based Workspaces

JifunzeHub provides distinct, high-fidelity environments tailored to specific institutional roles:

- **👨‍💻 System Core (Administrators):**
  - **Infrastructure Command Center:** Real-time monitoring of local server health, bandwidth utilization, and storage capacity.
  - **Device Ecosystem:** A live registry of all authorized campus hardware, tracking sync integrity, battery life, and node status.
  - **Curriculum Governance:** Tools to package massive TVET courses (like video heavy automotive diagnostics) into optimized, offline-ready chunks.

- **👨‍🏫 Staff Command (Lecturers):**
  - **Competency-Based Assessments:** Offline grading queues that automatically pull student submissions once devices reconnect to the LAN.
  - **Course Builder:** A visual, drag-and-drop studio to construct interactive modules.

- **🎓 Learner Portal (Students):**
  - Distraction-free, responsive learning environments optimized for low-end mobile devices and library PCs.
  - Clear indicators of "Offline Status" and pending sync uploads.

---

## 🎨 Design & UX Philosophy (The "Gooey" Interface)

JifunzeHub abandons the rigid, boring aesthetic of traditional LMS software. It embraces a **Premium, High-Tech Institutional Identity**:

- **Glassmorphism & Depth:** Heavy use of layered transparencies, subtle blurs, and glowing accents to create a modern OS feel.
- **Fluid Micro-interactions:** Powered by `Framer Motion`, every state change (from logging in to syncing data) feels alive and tactile.
- **Cinematic Provisioning:** The device registration and setup wizards simulate a futuristic boot sequence, complete with scanning radars, terminal logs, and pulse indicators.
- **High-Density Data:** Administrative tables are tight, professional, and dense with actionable data, utilizing badging and inline progress bars.

---

## 💻 Technology Stack

- **Frontend Framework:** React 18 with TypeScript
- **Build System:** Vite (Optimized for lightning-fast HMR and edge deployment)
- **Routing:** `@tanstack/react-router` (Type-safe, client-side SPA routing)
- **Styling:** Tailwind CSS + custom CSS variables for dynamic Dark/Light theming
- **UI Components:** `shadcn/ui` (Radix UI primitives for accessible, unstyled components)
- **Animations:** `framer-motion` (For complex layout shifts, radar visuals, and page transitions)
- **Data Visualization:** `recharts` (For institutional analytics and bandwidth monitoring)
- **Icons:** `lucide-react`

---

## ⚙️ Running Locally

Because the platform is built as a highly optimized Single Page Application (SPA), it can be served via any static file server or standard dev environment.

### Prerequisites

- Node.js (v18+)
- npm / yarn / pnpm

### Installation

```bash
# Install dependencies
npm install

# Start the local development server
npm run dev
```

### Deployment (Edge/Local Server)

```bash
# Build the production bundle
npm run build

# The resulting /dist folder can be served entirely offline
# via Nginx, Apache, or a localized Raspberry Pi cluster.
```

---

## 🛡️ Security & Provisioning

JifunzeHub employs a strict device provisioning sequence (`/device-setup`). Before accessing the network, a device must:

1. Register a unique hardware identifier.
2. Scan and verify the local campus LAN infrastructure.
3. Initialize an encrypted local offline database.
4. Verify institutional cryptographic credentials.

_JifunzeHub — Learning Without Internet Barriers._
