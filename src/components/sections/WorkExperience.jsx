import { workExperienceData } from '../../data/workExperience';
import './WorkExperience.scss';

function WorkExperience() {
    return (
        <>
            <div id="workExperience" className="alt-bg">
                <h1>Work Experience</h1>
            </div>

            <div className="bg">
                <div className="work-experience-grid">
                    {workExperienceData.map((experience, index) => (
                        <div key={index} className="experience-card">
                            {/* Image/Certificate Section */}
                            {experience.certificateImage && (
                                <div className="experience-image">
                                    <a
                                        href={experience.certificateUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src={experience.certificateImage}
                                            alt={`${experience.company} Certificate`}
                                            loading="lazy"
                                        />
                                    </a>
                                </div>
                            )}

                            {experience.logo && (
                                <div className="experience-logo">
                                    <a
                                        href={experience.logoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src={experience.logo}
                                            alt={`${experience.company} Logo`}
                                            loading="lazy"
                                        />
                                    </a>
                                </div>
                            )}

                            {/* Content Section */}
                            <div className="experience-content">
                                <div className="experience-header">
                                    <h2>{experience.company}</h2>
                                    {experience.upcoming && (
                                        <span className="upcoming-badge">Upcoming</span>
                                    )}
                                </div>

                                <div className="experience-meta">
                                    <span className="role">{experience.role}</span>
                                    <span className="date">{experience.date}</span>
                                </div>

                                <div className="experience-description">
                                    {experience.description.map((paragraph, idx) => (
                                        <p key={idx}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default WorkExperience;
