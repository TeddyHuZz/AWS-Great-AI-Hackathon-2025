import React, { useState, useEffect } from "react";
import "./Funding.css";
import HeaderForLoggedIn from "../components/HeaderForLoggedIn";
import { FiSearch, FiChevronDown } from "react-icons/fi";

function Funding({ searchTerm }) {
  const [fundings, setFundings] = useState([]);
  const [showSearch, setShowSearch] = useState(false); 
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState(null); 

  useEffect(() => {
    const mockData = [
      {
        id: 1,
        title: "SME Digitalisation Grant 2025",
        description:
          "Supports SMEs adopting digital tools with up to RM5,000 matching grant.",
        howToApply: "Visit the official portal and submit required documents.",
        image:
          "https://images.unsplash.com/photo-1581090700227-4c4e1fef8a3b?fit=crop&w=800&q=80",
      },
      {
        id: 2,
        title: "Technology Upgrade Assistance 2025",
        description:
          "Funding for SMEs to upgrade machinery and improve productivity.",
        howToApply: "Fill out the application form and provide business license.",
        image:
          "https://images.unsplash.com/photo-1605902711622-cfb43c4437f4?fit=crop&w=800&q=80",
      },
      {
        id: 3,
        title: "Green Business Fund 2026",
        description:
          "Grants to support environmentally friendly and sustainable SME projects.",
        howToApply:
          "Prepare sustainability plan and submit through the government portal.",
        image:
          "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?fit=crop&w=800&q=80",
      },
    ];
    setFundings(mockData);
  }, [searchTerm]);


  const filteredFundings = fundings.filter((f) =>
    f.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fundingResultsContainer">
      <HeaderForLoggedIn />

      <div className="resultsHeader">
        <h1 className="resultsTitle">
          Showing results for: <span>{searchTerm}</span>
        </h1>

        <div className="searchWrapper">
          {!showSearch ? (
            <FiSearch
              className="searchIcon"
              onClick={() => setShowSearch(true)}
            />
          ) : (
            <input
              type="text"
              className="searchInput"
              placeholder="Search fundings..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onBlur={() => setShowSearch(false)} 
              autoFocus
            />
          )}
        </div>
      </div>

      <div className="cardsGrid">
        {filteredFundings.map((funding) => (
          <div className="fundingCard" key={funding.id}>
            <div className="cardImageWrapper">
              <img
                src={funding.image}
                alt={funding.title}
                className="cardImage"
              />
              <div className="imageOverlay">
                <h2 className="cardTitle">{funding.title}</h2>
              </div>
            </div>

            <div className="cardBody">
              <p className="cardDescription">{funding.description}</p>

              <div
                className="howToApplyToggle"
                onClick={() =>
                  setExpandedId(expandedId === funding.id ? null : funding.id)
                }
              >
                <h3 className="howToApplyTitle">How to Apply</h3>
                <FiChevronDown
                  className={`dropdownIcon ${
                    expandedId === funding.id ? "rotated" : ""
                  }`}
                />
              </div>

              {expandedId === funding.id && (
                <div className="howToApplyDropdown">
                  <button
                    className="chatbotLink"
                    onClick={() => alert("Chatbot coming soon!")}
                  >
                    {funding.howToApply} (Open Chatbot)
                  </button>
                </div>
              )}

              <div className="cardActions">
                <button className="applyButton">Apply</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Funding;
