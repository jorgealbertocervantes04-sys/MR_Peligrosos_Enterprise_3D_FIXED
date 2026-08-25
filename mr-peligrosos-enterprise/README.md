# MR Peligrosos · Enterprise 3D Full-Stack-ready

## Stack
React + TypeScript + Vite + Three.js + React Three Fiber + Drei + Tailwind CSS + Framer Motion + Zustand + Lucide React.

## Carpetas
```text
mr-peligrosos-enterprise/
├─ index.html
├─ package.json
├─ vite.config.ts
├─ tsconfig.json
├─ tsconfig.app.json
├─ tsconfig.node.json
├─ .env.example
└─ src/
   ├─ App.tsx
   ├─ main.tsx
   ├─ index.css
   ├─ store.ts
   ├─ data/
   │  ├─ course.ts
   │  └─ content.ts
   ├─ services/
   │  └─ telemetry.ts
   ├─ types/
   │  └─ course.ts
   ├─ components/
   │  ├─ Layout.tsx
   │  ├─ Sidebar.tsx
   │  ├─ QuizEngine.tsx
   │  ├─ ui/
   │  │  ├─ GlassCard.tsx
   │  │  └─ SectionHeader.tsx
   │  └─ 3d/
   │     ├─ Scene.tsx
   │     ├─ TruckModel.tsx
   │     └─ SafetyDiamond.tsx
   └─ modules/
      ├─ Module0Diagnostic.tsx
      ├─ Module1Concepts.tsx
      ├─ Module2Legal.tsx
      ├─ Module3Risks.tsx
      ├─ Module4Sct.tsx
      ├─ Module5Operations.tsx
      └─ Module6FinalExam.tsx
```

## Ejecutar en VS Code
Node 20.19+.

```bash
npm install
npm run dev
```

Validación:
```bash
npm run typecheck
npm run build
```

## Datos / Google Sheets
`src/services/telemetry.ts` ya expone un punto único de integración. Si defines `VITE_TELEMETRY_URL`, cada evento puede enviarse por POST a un backend / Apps Script / Cloud Run. Sin endpoint, los datos quedan en Zustand persistido en localStorage y pueden exportarse a JSON.

## Contenido
La estructura usa como base el material proporcionado por el usuario y conserva su terminología y temas. El módulo legal debe validarse contra la versión normativa vigente antes de utilizarse como capacitación de cumplimiento.
