import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import SearchBar from "./components/searchBar";
import Contact from "./Contact";
import Resources from "./Resources";

function Home() {
  return (
    <>
      {/* Main Title */}
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

      {/* Search Bar */}
      <SearchBar />
      <span className="searchBarSpan">
        Get matched with relevant funding in 60 seconds!
      </span>

      {/* Benefits */}
      <div className="benefitsContainer">
        <div className="firstBenefit">
          <h2>AI-Powered Matching</h2>
          <p>Our intelligent algorithm analyzes your business profile and matches you with the most relevant funding opportunities.</p>
        </div>
        <div className="secondBenefit">
          <h2>Save Time</h2>
          <p>Reduce hours of research to minutes. We do the heavy lifting so you can focus on growing your business.</p>
        </div>
        <div className="thirdBenefit">
          <h2>Trusted & Secure</h2>
          <p>Bank-level security with verified government funding sources. Your data is protected and never shared.</p>
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
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;