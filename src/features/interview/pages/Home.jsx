
import { useState, useRef } from "react";
import { useInterview } from "../hooks/useInterview";
import "../styles/home.scss";
import { useNavigate } from "react-router";


const Home = () => {

    const { loading, generateReport, reports } = useInterview()
    const [jobDescription, setJobDescription] = useState("");
    const [selfDescription, setSelfDescription] = useState("");
    const resumeInputRef = useRef();
    const navigate = useNavigate();

    const handleGenerateReport = async () => {
        const resumeFile = resumeInputRef.current.files[0]

        const data = await generateReport({ jobDescription, selfDescription, resumeFile })

        navigate(`/interview/${data._id}`)

    }

    if (loading) {
        return (
            <main className="loading-screen">
                <h1>Loading your interview plan ....</h1>
            </main>
        )
    }

    return (
        <main className="home">
            <div className="wrapper">
                {/* Heading */}
                <div className="hero-section">
                    <h1>
                        Create Your Custom <span>Interview Plan</span>
                    </h1>
                    <p>
                        Let our AI analyze the job requirements and your unique profile to
                        build a winning strategy.
                    </p>
                </div>

                {/* Main Card */}
                <div className="interview-input-group">
                    {/* Left Section */}
                    <div className="left">
                        <div className="section-header">
                            <label htmlFor="jobDescription">Target Job Description</label>
                            <span className="badge required">REQUIRED</span>
                        </div>

                        <textarea
                            onChange={(e) => setJobDescription(e.target.value)}
                            name="jobDescription"
                            id="jobDescription"
                            placeholder="Paste the full job description here...

e.g. 'Senior Frontend Engineer at Google requires proficiency in React, TypeScript, and large-scale system design...'"
                        />

                        <small className="char-count">0 / 5000 chars</small>
                    </div>

                    {/* Right Section */}
                    <div className="right">
                        <div className="section-header">
                            <label>Your Profile</label>
                        </div>

                        {/* Resume Upload */}
                        <div className="input-group">
                            <p>
                                Upload Resume
                                <span className="badge best-results">BEST RESULTS</span>
                            </p>

                            <label className="file-label" htmlFor="resume">
                                <div>
                                    <h4>Click to upload or drag & drop</h4>
                                    <small>PDF or DOCX (Max 5MB)</small>
                                </div>
                            </label>

                            <input
                                ref={resumeInputRef}
                                hidden
                                type="file"
                                name="resume"
                                id="resume"
                                accept=".pdf"
                            />
                        </div>

                        <div className="divider">OR</div>

                        {/* Self Description */}
                        <div className="input-group">
                            <label htmlFor="selfDescription">Quick Self-Description</label>
                            <textarea
                                onChange={(e) => { setSelfDescription(e.target.value) }}
                                name="selfDescription"
                                id="selfDescription"
                                placeholder="Briefly describe your experience, key skills, and years of experience if you don't have a resume handy..."
                            />
                        </div>

                        {/* Info Box */}
                        <div className="info-box">
                            Either a <strong>Resume</strong> or a <strong>Self Description</strong>{" "}
                            is required to generate a personalized plan.
                        </div>

                        {/* Button */}
                        <button
                            onClick={handleGenerateReport}
                            className="button primary-button">
                            Generate My Interview Strategy
                        </button>
                    </div>
                </div>

                {/* Recent Reports List */}

                {reports.length > 0 && (
                    <section className="recent-reports">
                        <h2>My Recent Interview Plans</h2>

                        <ul className="reports-list">
                            {reports.map((report) => (
                                <li
                                    key={report._id}
                                    className="report-item"
                                    onClick={() => navigate(`/interview/${report._id}`)}
                                >
                                    {/* LEFT SIDE */}
                                    <div className="report-left">
                                        <h3>
                                            {report.title || "Untitled Position"}
                                        </h3>

                                        <p className="report-meta">
                                            Generated on{" "}
                                            {new Date(report.createdAt).toLocaleDateString()}
                                        </p>
                                    </div>

                                    {/* RIGHT SIDE → MATCH SCORE */}
                                    <div className="report-right">
                                        <div className="mini-score-circle">
                                            {report.matchScore || 88}%
                                        </div>

                                        <p className="mini-score-text">
                                            Match Score
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}
                {/* Footer */}
                <div className="bottom-links">
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                    <span>Help Center</span>
                </div>
            </div>
        </main>
    );
};

export default Home;