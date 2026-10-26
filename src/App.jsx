import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/homepage";
import Campuses from "./pages/campuses";
import NotFound from "./pages/notfound";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/campuses" element={<Campuses />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}