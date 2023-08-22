// import HomeSection from "@/components/features/home";
import React, { lazy, Suspense } from "react";
const HomeSection = lazy(() => import("@/components/features/home"));

export default function Home() {
  return (
    <div>
      <Suspense fallback={<div className="bg-red">Loading.........</div>}>
        <HomeSection />
      </Suspense>
    </div>
  );
}

// import React, { lazy, Suspense } from 'react';

// const LazyComponent = lazy(() => import('./LazyComponent'));

// function App() {
//   return (
//     <div>
//       <h1>React Dynamic Import Example</h1>
//       <Suspense fallback={<div>Loading...</div>}>
//         <LazyComponent />
//       </Suspense>
//     </div>
//   );
// }

// export default App;
