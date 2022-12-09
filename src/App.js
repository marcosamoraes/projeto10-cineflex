import Success from './pages/Success';
import Seats from './pages/Seats';
import Sessions from './pages/Sessions';
import Home from './pages/Home';
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={Home}></Route>
        <Route path="/sessoes/:id" element={Sessions}></Route>
        <Route path="/assentos/:id" element={Seats}></Route>
        <Route path="/sucesso" element={Success}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
