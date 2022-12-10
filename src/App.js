import Success from "./pages/Success/Success";
import Seats from "./pages/Seats/Seats";
import Sessions from "./pages/Sessions/Sessions";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./App.styles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sessoes/:id" element={<Sessions />}></Route>
        <Route path="/assentos/:id" element={<Seats />}></Route>
        <Route path="/sucesso" element={<Success />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
