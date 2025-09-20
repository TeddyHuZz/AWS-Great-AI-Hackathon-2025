import React, { useState } from "react";
import Header from "/Header"; // ✅ adjust the path if your Header is in a different folder
import "./funding.css";

function Funding() {
  // Pretend this comes from a search or database later
  const [searchTerm] = useState("Digitalisation Grants");

  // Mock funding opportunities (replace with DB/API later)
  const opportunities = [
    {
      id: 1,
      title: "SME Digitalisation Grant 2025",
      tag: "Grant",
      description:
        "Get up to RM5,000 matching grant to digitalise your business with approved service providers.",
      deadline: "December 31, 2025",
    },
    {
      id: 2,
      title: "SME Business Expansion Fund",
      tag: "Loan",
      description:
        "Supports SMEs planning to expand locally or internationally with low-interest financing and advisory services.",
      deadline: "November 15, 2025",
    },
    {
      id: 3,
      title: "Green Technology Financing Scheme",
      tag: "Financing",
      description:
        "Encourages adoption of sustainable practices by providing partial government guarantees and financing options.",
      deadline: "October 30, 2025",
    },
  ];

  return (
    <div>
      {/* ✅ Global header (same as other pages) */}
      <Header />

      {/* Funding content */}
      <div className="funding-page">
        <h1 className="funding-title">
          Results for: <span className="highlight">"{searchTerm}"</span>
        </h1>

        <div className="funding-cards">
          {opportunities.map((opportunity) => (
            <div className="funding-card" key={opportunity.id}>
              <div className="funding-tag">{opportunity.tag}</div>
              <h2>{opportunity.title}</h2>
              <p>{opportunity.description}</p>
              <span className="funding-deadline">
                Deadline: {opportunity.deadline}
              </span>
              <div className="funding-buttons">
                <button className="apply-btn">Apply</button>
                <button className="support-btn">Support</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Funding;
