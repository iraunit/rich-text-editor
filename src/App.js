import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MyJoditEditor from "./Jodit";
import MyCKEditor from "./CKEditor";
import MyQuillEditor from "./Quill";
import Navbar from "./Navbar";
import Home from "./Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/jodit" element={<MyJoditEditor />} />
          <Route path="/ckeditor" element={<MyCKEditor />} />
          <Route path="/quill" element={<MyQuillEditor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
