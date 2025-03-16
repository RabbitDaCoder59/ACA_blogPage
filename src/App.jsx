import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import SinglePage from "./pages/SinglePage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:id" element={<SinglePage />} />
      </Routes>
    </>
  );
}

export default App;
