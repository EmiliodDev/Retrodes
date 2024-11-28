import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import ComplaintForm from "./pages/ComplaintForm";
import HRDashboard from "./pages/HRDashboard";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/complaint-form" element={<ComplaintForm />} />
        <Route path="/hrdashboard" element={<HRDashboard />} />
      </Routes>
    </Router>
  )
}

export default App
