import React, { useState } from "react";
import HeaderForLoggedIn from "../components/HeaderForLoggedIn";
import "./ProfileSetup.css";

const ProfileSetup = () => {
  const [basicInfo, setBasicInfo] = useState({
    name: "",
    industry: "",
    employees: "",
    description: "",
    activities: "",
  });

  const [financialInfo, setFinancialInfo] = useState({
    revenue: "",
    profitMargin: "",
    funding: "",
    expenses: "",
  });

  const [goals, setGoals] = useState({
    shortTerm: "",
    longTerm: "",
  });

  const handleSaveBasicInfo = () => {
    console.log("Basic Info Saved:", basicInfo);
    alert("Basic info saved!");
  };

  const handleSaveFinancialInfo = () => {
    console.log("Financial Info Saved:", financialInfo);
    alert("Financial info saved!");
  };

  const handleSaveGoals = () => {
    console.log("Business Goals Saved:", goals);
    alert("Business goals saved!");
  };

  return (
    <div className="profile-setup">
      <HeaderForLoggedIn />

      {/* Basic Info */}
      <div className="card">
        <h2>Basic Information</h2>
        <div className="form-inline">
          <div className="form-group flex-item">
            <label>Business Name *</label>
            <input
              type="text"
              placeholder="Enter your business name"
              value={basicInfo.name}
              onChange={(e) =>
                setBasicInfo({ ...basicInfo, name: e.target.value })
              }
            />
          </div>

          <div className="form-group flex-item">
            <label>Industry *</label>
            <select
              value={basicInfo.industry}
              onChange={(e) =>
                setBasicInfo({ ...basicInfo, industry: e.target.value })
              }
            >
              <option value="">Select your industry</option>
              <option value="Tech">Technology</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Finance">Finance</option>
              <option value="Education">Education</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Employee Count</label>
          <input
            type="number"
            placeholder="0"
            value={basicInfo.employees}
            onChange={(e) =>
              setBasicInfo({ ...basicInfo, employees: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            placeholder="Describe your business..."
            value={basicInfo.description}
            onChange={(e) =>
              setBasicInfo({ ...basicInfo, description: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label>Key Activities (comma separated)</label>
          <input
            type="text"
            placeholder="e.g. Software development, Consulting, Marketing"
            value={basicInfo.activities}
            onChange={(e) =>
              setBasicInfo({ ...basicInfo, activities: e.target.value })
            }
          />
        </div>

        <button className="save-btn" onClick={handleSaveBasicInfo}>
          Save Basic Info
        </button>
      </div>

      {/* Financial Info */}
      <div className="card">
        <h2>Financial Information</h2>

        <div className="form-inline">
          <div className="form-group flex-item">
            <label>Annual Revenue (MYR)</label>
            <input
              type="number"
              placeholder="0"
              value={financialInfo.revenue}
              onChange={(e) =>
                setFinancialInfo({ ...financialInfo, revenue: e.target.value })
              }
            />
          </div>

          <div className="form-group flex-item">
            <label>Profit Margin (%)</label>
            <input
              type="number"
              placeholder="0"
              value={financialInfo.profitMargin}
              onChange={(e) =>
                setFinancialInfo({
                  ...financialInfo,
                  profitMargin: e.target.value,
                })
              }
            />
          </div>
        </div>

        <div className="form-inline">
          <div className="form-group flex-item">
            <label>Funding (MYR)</label>
            <input
              type="number"
              placeholder="0"
              value={financialInfo.funding}
              onChange={(e) =>
                setFinancialInfo({ ...financialInfo, funding: e.target.value })
              }
            />
          </div>

          <div className="form-group flex-item">
            <label>Expenses (MYR)</label>
            <input
              type="number"
              placeholder="0"
              value={financialInfo.expenses}
              onChange={(e) =>
                setFinancialInfo({ ...financialInfo, expenses: e.target.value })
              }
            />
          </div>
        </div>

        <button className="save-btn" onClick={handleSaveFinancialInfo}>
          Save Financial Info
        </button>
      </div>

      {/* Business Goals */}
      <div className="card">
        <h2>Business Goals</h2>

        <div className="form-group">
          <label>Short-term Goals (comma separated)</label>
          <input
            type="text"
            placeholder="e.g. Increase revenue by 20%, Launch new product, Expand team"
            value={goals.shortTerm}
            onChange={(e) =>
              setGoals({ ...goals, shortTerm: e.target.value })
            }
          />
          <small>List your goals for the next 6–12 months</small>
        </div>

        <div className="form-group">
          <label>Long-term Goals (comma separated)</label>
          <input
            type="text"
            placeholder="e.g. Market leadership, IPO, International expansion"
            value={goals.longTerm}
            onChange={(e) =>
              setGoals({ ...goals, longTerm: e.target.value })
            }
          />
        </div>

        <button className="save-btn" onClick={handleSaveGoals}>
          Save Business Goals
        </button>
      </div>
    </div>
  );
};

export default ProfileSetup;
