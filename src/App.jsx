import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
//import AppSide from "./components/AppSide";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Automation from "./components/Automation";
import Planner from "./components/Planner";
import Standars from "./components/Standars";
import Proffessionaloffre from "./components/Proffessionaloffre";
import Premium from "./components/Premium";
import AppPricing from "./components/AppPricing";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Header from "./components/Header";
import { Kanban } from "lucide-react";
import Views from "./components/Views";
import EquipementsMarketing from "./components/EquipementsMarketing";
import StartUps from "./components/StartUps";
import GestiondeProduit from "./components/GestiondeProduit";
function App() {
  
  return (
<>
{/* test */}
<Router>
  <Header />
      <Routes>
      <Route path="/kanban" element={<Kanban />} />
      <Route path="/Views" element={<Views />} />
      <Route path="/EquipementsMarketing" element={<EquipementsMarketing />} />
      <Route path="/StartUps" element={<StartUps />} />
      <Route path="/GestiondeProduit" element={<GestiondeProduit />} />
        <Route path="/" element={<Home />} />
        <Route path="/Automation" element={<Automation />} />
        <Route path="/Planner" element={<Planner/>} />
        <Route path="/Standars" element={<Standars/>} />
        <Route path="/Proffessional" element={<Proffessionaloffre/>} />
        <Route path="/Premium" element={<Premium/>} />
        <Route path="/AppPricing" element={<AppPricing/>} />
        <Route path="/LoginForm" element={<LoginForm/>} />
        <Route path="/SignupForm" element={<SignupForm/>} />

      </Routes>
    </Router>
</>


);
}

export default App;
