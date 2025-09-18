import { useState } from "react";
import "./Resources.css";
import { queAns } from "./components/faqArray";

function Question({ faqObject: { question, answer } }) {
    const [isOpen, setIsOpen] = useState(false);
    
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
  
    return (
        <div className="faq-box">
            <div 
                className="faq-question" 
                onClick={handleToggle}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleToggle();
                    }
                }}
            >
                <h4>{question}</h4>
                <span className={`faq-icon ${isOpen ? 'open' : ''}`}>
                    {isOpen ? '−' : '+'}
                </span>
            </div>
            <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
                <p>{answer}</p>
            </div>
        </div>
    );
}

function Resources() {
  return (
    // Main Title
    <div className="Resources">
        <div className="resourcesHeader">
            <h1 className="resourcesTitle">From Application to <span className="resourcesTitleHighlight">Funding</span> in 4 simple steps</h1>
            <p className="resourcesDescription">Our streamlined process makes finding and applying for government funding straightforward and stress-free.</p>
        </div>

        <div className="resourcesSteps">
            <div className="resourcesStepOne">
                <h2 className="resourcesStepNumberOne">01</h2>
                <div className="resourcesStepContent">
                    <h2 className="resourcesStepOneTitle">Complete Your Company Profile</h2>
                    <p className="resourcesStepOneDescription">Tell us about your business, industry, size, revenue, and goals. This takes just 5 minutes of your time.</p>
                </div>
            </div>
            <div className="resourcesStepTwo">
                <h2 className="resourcesStepNumberTwo">02</h2>
                <div className="resourcesStepContent">
                    <h2 className="resourcesStepTwoTitle">Get AI-Powered Funding Matches</h2>
                    <p className="resourcesStepTwoDescription">Our AI-powered platform analyzes your profile and matches you with the best funding opportunities.</p>
                </div>
            </div>
            <div className="resourcesStepThree">
                <h2 className="resourcesStepNumberThree">03</h2>
                <div className="resourcesStepContent">
                    <h2 className="resourcesStepThreeTitle">Apply with Guidance</h2>
                    <p className="resourcesStepThreeDescription">Use our step-by-step application wizard with document templates and expert tips to submit winning applications.</p>
                </div>
            </div>
            <div className="resourcesStepFour">
                <h2 className="resourcesStepNumberFour">04</h2>
                <div className="resourcesStepContent">
                    <h2 className="resourcesStepFourTitle">Track & Get Funded</h2>
                    <p className="resourcesStepFourDescription">Monitor your applications, get deadline reminders, and celebrate when the funding comes through.</p>
                </div>
            </div>
        </div>

        <div className="resourcesFAQ">
            <div className="resourcesFAQContent">
                <h1 className="resourcesFAQTitle">Frequently Asked Questions</h1>
                <p className="resourcesFAQDescription">Get answers to common questions about using FundMatch and securing funding.</p>
            </div>

            <div className="resourcesFAQQuestions">
                {queAns.map((que) => (
                <Question faqObject={que} key={que.question} />
                ))}
            </div>
        </div>
    </div>
  );
}

export default Resources;