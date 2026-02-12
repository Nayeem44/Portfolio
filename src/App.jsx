import { Suspense, lazy } from "react";
import Navbar from "./Components/navbar";
import Hero from "./Components/hero";

const Projects = lazy(() => import("./Components/projects"));

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={<h2>Loading Projects...</h2>}>
        <Projects />
      </Suspense>
    </>
  );
}

export default App;
