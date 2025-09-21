import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import SearchBar from "./components/searchBar";
import Contact from "./Contact";
import Resources from "./Resources";
import Dashboard from "./Dashboard";
import Login from "./components/login";
import Signup from "./components/signup";
import Loggedin from "./pages/Loggedin"; 
import Funding from "./pages/Funding";
import ProfileSetup from "./pages/ProfileSetup";
function Home() {
  return (
    <>
      
      <div className="mainContent">
        <span className="trustedBadge">Trusted by 10,000+ SMEs</span>
        <h1 className="mainTitle">
          Find Government Funding{" "}
          <span className="mainTitleHighlight">Made Simple</span>
        </h1>
        <p className="productDescription">
          Our AI-powered platform matches your business with the perfect
          government grants and funding opportunities. Skip the complex
          paperwork maze and get funded faster.
        </p>
      </div>

      
      <SearchBar />
      <span className="searchBarSpan">
        Get matched with relevant funding in 60 seconds!
      </span>

      
      <div className="benefitsContainer">
        <div className="firstBenefit">
          <h2>AI-Powered Matching</h2>
          <p>
            Our intelligent algorithm analyzes your business profile and matches
            you with the most relevant funding opportunities.
          </p>
        </div>
        <div className="secondBenefit">
          <h2>Save Time</h2>
          <p>
            Reduce hours of research to minutes. We do the heavy lifting so you
            can focus on growing your business.
          </p>
        </div>
        <div className="thirdBenefit">
          <h2>Trusted & Secure</h2>
          <p>
            Bank-level security with verified government funding sources. Your
            data is protected and never shared.
          </p>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Loggedin" element={<Loggedin />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/funding" element={<Funding searchTerm="Digitalisation" />} />
          <Route path="/profilesetup" element={<ProfileSetup />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
