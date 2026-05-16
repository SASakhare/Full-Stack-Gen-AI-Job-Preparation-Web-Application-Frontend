import React, { useState, useEffect } from "react";
import "../styles/interview.scss";

import { useInterview } from "../hooks/useInterview";
import { useParams } from "react-router";


const QuestionCard = ({ item, index }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="q-card">
            <div className="q-card__header" onClick={() => setOpen(!open)}>
                <span className="q-card__index">{String(index + 1).padStart(2, "0")}</span>
                <p className="q-card__question">{item.question}</p>
                <span className="q-card__icon">⌄</span>
            </div>

            {open && (
                <div className="q-card__body">
                    <div>
                        <h4>Intention</h4>
                        <p>{item.intention}</p>
                    </div>
                    <div>
                        <h4>Model Answer</h4>
                        <p>{item.answer}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

const Interview = () => {
    const [activeTab, setActiveTab] = useState("technical");

    const { report, getReportById, loading } = useInterview();

    const { interviewId } = useParams()

    useEffect(() => {
        if (interviewId) {
            getReportById(interviewId);
        }
    }, [interviewId])


    if (loading || !report) {
        return (
            <main className="loading-screen">
                <h1>Loading your interview plan .... </h1>
            </main>
        )
    }
    const technicalQuestions = report.technicalQuestions;
    const behavioralQuestions = report.behavioralQuestions;
    const preparationPlan = report.preparationPlan;
    const skillGaps = report.skillGaps;



    return (
        <div className="interview-page">
            <div className="layout">

                {/* LEFT SIDEBAR */}
                <aside className="sidebar-left">
                    <p className="section-title">SECTIONS</p>

                    <button
                        className={
                            activeTab === "technical" ? "active" : ""
                        }
                        onClick={() => setActiveTab("technical")}
                    >
                        Technical Questions
                    </button>

                    <button
                        className={
                            activeTab === "behavioral" ? "active" : ""
                        }
                        onClick={() => setActiveTab("behavioral")}
                    >
                        Behavioral Questions
                    </button>

                    <button
                        className={
                            activeTab === "roadmap" ? "active" : ""
                        }
                        onClick={() => setActiveTab("roadmap")}
                    >
                        Road Map
                    </button>
                </aside>

                {/* CENTER CONTENT */}
                <main className="main-content">

                    {activeTab === "technical" && (
                        <>
                            <div className="content-header">
                                <h2>Technical Questions</h2>
                                <span>3 questions</span>
                            </div>

                            {technicalQuestions.map((item, index) => (
                                <QuestionCard
                                    key={index}
                                    item={item}
                                    index={index}
                                />
                            ))}
                        </>
                    )}

                    {activeTab === "behavioral" && (
                        <>
                            <div className="content-header">
                                <h2>Behavioral Questions</h2>
                                <span>2 questions</span>
                            </div>

                            {behavioralQuestions.map((item, index) => (
                                <QuestionCard
                                    key={index}
                                    item={item}
                                    index={index}
                                />
                            ))}
                        </>
                    )}

                    {activeTab === "roadmap" && (
                        <>
                            <div className="content-header">
                                <h2>Preparation Road Map</h2>
                            </div>

                            {preparationPlan.map((day) => (
                                <div
                                    className="roadmap-card"
                                    key={day.day}
                                >
                                    <h3>
                                        Day {day.day}: {day.focus}
                                    </h3>

                                    <ul>
                                        {day.tasks.map((task, i) => (
                                            <li key={i}>{task}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </>
                    )}

                </main>

                {/* RIGHT SIDEBAR */}
                <aside className="sidebar-right">
                    <h3>Match Score</h3>

                    <div className="score-circle">
                        88%
                    </div>

                    <p className="match-text">
                        Strong match for this role
                    </p>

                    <h4>Skill Gaps</h4>

                    <div className="skills">
                        {skillGaps.map((item, index) => (
                            <div
                                key={index}
                                className={`skill ${item.severity}`}
                            >
                                {item.skill}
                            </div>
                        ))}
                    </div>
                </aside>

            </div>
        </div>
    );
};

export default Interview;