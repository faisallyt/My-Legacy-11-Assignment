import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ItemListed from "./pages/ItemListed";
import Navbar from "./components/Navbar";
import BookMarks from "./pages/BookMarks";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lists" element={<ItemListed />} />
        <Route path="/bookMarks" element={<BookMarks />} />
      </Routes>
    </>
  );
}

export default App;
