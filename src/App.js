import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from './pages';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />}>
          {/* Nested routes */}
          <Route index element={<Home />} />
          {/* <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
