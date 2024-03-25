import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import SendEther from "./SendEther";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sendingTransactions" element={<SendEther />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
