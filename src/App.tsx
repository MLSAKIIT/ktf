import {useEffect} from "react";
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import Index from "@pages/Index";
import _404 from '@pages/_404';
import { Main } from "@layouts/Main";
import { Sponsors } from "@pages/Sponsors";
import { Kiit } from "@pages/About/Kiit";
import { Ktf } from "@pages/About/Ktf";
import { Msc } from "@pages/About/Msc";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Index />} />
          <Route path="about">
            <Route path="ktf" element={<Ktf />} />
            <Route path="kiit" element={<Kiit />} />
            <Route path="msc" element={<Msc />} />
          </Route>
          <Route path="sponsors" element={<Sponsors />} />
          <Route path="*" element={<_404 />} />
      </Routes>
    </Router>
  )

}
export default App
