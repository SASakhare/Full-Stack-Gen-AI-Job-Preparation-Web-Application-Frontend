
import "../styles/home.scss";

const Home = () => {
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
                                hidden
                                type="file"
                                name="resume"
                                id="resume"
                                accept=".pdf,.doc,.docx"
                            />
                        </div>

                        <div className="divider">OR</div>

                        {/* Self Description */}
                        <div className="input-group">
                            <label htmlFor="selfDescription">Quick Self-Description</label>
                            <textarea
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
                        <button className="button primary-button">
                            Generate My Interview Strategy
                        </button>
                    </div>
                </div>

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