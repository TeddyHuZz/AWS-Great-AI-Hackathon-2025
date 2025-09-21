import React from "react";
import "./loggedin.css";
import SearchBar from "../components/searchBar";
import HeaderForLoggedIn from "../components/HeaderForLoggedIn"; 

function Loggedin() {
  return (
    <>
      <HeaderForLoggedIn />
      <HeaderForLoggedIn />

      <div className="mainContent">
        <span className="trustedBadge">Welcome back 👋</span>
        <h1 className="mainTitle">
          Discover <span className="mainTitleHighlight">Your Funding</span>
        </h1>
        <p className="productDescription">
          Based on your business profile, we have tailored funding
          recommendations just for you. Search and apply instantly.
        </p>
      </div>


      <SearchBar />
      <span className="searchBarSpan">
        Get matched with relevant funding in 60 seconds!
      </span>


      <div className="benefitsContainer">
        <div className="firstBenefit">
          <h2>Personalized Matches</h2>
          <p>
            We analyze your business profile and provide the most relevant
            funding opportunities.
          </p>
        </div>
        <div className="secondBenefit">
          <h2>Quick Apply</h2>
          <p>
            Save your details once and apply to multiple opportunities with one
            click.
          </p>
        </div>
        <div className="thirdBenefit">
          <h2>Track Progress</h2>
          <p>
            Monitor your funding applications and approvals directly in your
            dashboard.
          </p>
        </div>
      </div>
    </>
  );
}

export default Loggedin;
