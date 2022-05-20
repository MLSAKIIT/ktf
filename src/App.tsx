import {useEffect} from "react";
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import Index from "@pages/Index";
import _404 from '@pages/_404';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<_404 />} />
      </Routes>
    </Router>
  )

}
export default App
