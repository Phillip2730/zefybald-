import { useState, Suspense, lazy } from "react";
import WarmupCalculator from "./WarmupCalculator";
const RPEGuide = lazy(() => import("./RPEGuide"));

export default function App() {
  const [activeTab, setActiveTab] = useState("calculator");

  const baseBtn =
    "text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 rounded-md px-3";
  const inactive = "text-gray-900 dark:text-gray-200";
  const active = "text-blue-700 dark:text-blue-400";

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <main className="flex-1 flex items-center justify-center p-4">
        <Suspense fallback={<div className="opacity-70">Loading…</div>}>
          {activeTab === "calculator" ? <WarmupCalculator /> : <RPEGuide />}
        </Suspense>
      </main>

      <nav
        className="flex justify-around bg-white dark:bg-gray-800 border-t border-gray-300 dark:border-gray-700 p-4"
        role="navigation"
        aria-label="Bottom Tabs"
      >
        <button
          onClick={() => setActiveTab("calculator")}
          className={`${baseBtn} ${activeTab === "calculator" ? active : inactive}`}
          aria-current={activeTab === "calculator" ? "page" : undefined}
          aria-label="Calculator tab"
        >
          Calculator
        </button>
        <button
          onClick={() => setActiveTab("rpe")}
          className={`${baseBtn} ${activeTab === "rpe" ? active : inactive}`}
          aria-current={activeTab === "rpe" ? "page" : undefined}
          aria-label="RPE Guide tab"
        >
          RPE
        </button>
      </nav>
    </div>
  );
}
