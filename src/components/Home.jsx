import React from 'react';


function Home() {
    return (
        <>
            <div id="introduction" className="alt-bg">
                <h1>Introduction</h1>

                <p>I’m a motivated and reliable individual with a strong passion for technology, eager to grow my experience in cybersecurity and software engineering through an apprenticeship or entry-level role. I enjoy solving complex problems and continuously expanding my technical knowledge by exploring new programming languages and frameworks such as React. Alongside this, I’m developing my understanding of core cybersecurity principles through independent study, driven by a genuine curiosity for how systems and data can be protected.</p>
            </div>

            <div className="bg">
                <div className="grid" id="repo-grid">
                    <a className="card" href="https://github.com/archieovo/archie-overton" target="_blank">
                        <img src="https://opengraph.githubassets.com/1/archieovo/archie-overton" alt="Computer Science Project" />
                        <div className="card-content">
                            <h2>Website Source Code</h2>
                            <p>This is the source code for my website!</p>
                        </div>
                    </a>

                </div>
                <div className="grid" id="repo-grid">
                    <a className="card" href="https://github.com/archieovo/Comp-Science-Project" target="_blank">
                        <img src="https://opengraph.githubassets.com/1/archieovo/Comp-Science-Project" alt="Computer Science Project" />
                        <div className="card-content">
                            <h2>Replica Gym Track App</h2>
                            <p>Through the creation of this project I explored the fundamentals of OOP in python and database management systems</p>
                        </div>
                    </a>

                </div>
            </div>



            <div id="interestInTech" className="alt-bg">
                <h1>Interest In Technology</h1>

                <p>My interest in technology began at age 14 when I built my first computer, sparking a fascination with how hardware and software interact. This curiosity quickly expanded into programming, starting with Python, where I experimented with basic programs and eventually developed my first major project involving databases and a fully functional Python application. While hardware introduced me to technology, it was the depth and creativity of software development that truly captivated me. Since then, I have continued to explore areas such as web development using React and the fundamentals of cybersecurity, continuously building both my practical skills and theoretical understanding.</p>
            </div>

            <div id="workExperience" className="alt-bg">
                <h1>Work experience</h1>
            </div>

            <div className="bg">
                <div className="cert_container">
                    <a href="https://certificates.young-professionals.uk/c/021cccf5658648f8af19be2a5a3f7a98" target="_blank">
                        <img id="certImage" src="/assets/cert.png" alt="Work experience certificate" />
                    </a>
                    <div id="mhrImage" className="experianText">
                        <p>    Experian Nottingham – Work Insight Day (1st November 2024)
                            I took part in a work experience day at Experian, where I was introduced to how data is used to support business decisions. As part of the experience, I participated in a data analysis activity that involved sorting and interpreting a dataset to determine how different customer groups should receive differently priced Alton Towers ticket offers. This exercise helped me understand how companies use data-driven reasoning, segmentation, and teamwork to guide commercial decisions.</p>

                        <p>  We were also given a tour of Experian’s Nottingham office, where I gained an understanding of how different departments collaborate within a large technology organisation. One of the most valuable parts of the day was speaking with current degree apprentices about their application processes, the skills they developed, and what it’s like working at Experian. Their advice gave me a clearer idea of the expectations of apprenticeship roles and motivated me to continue building my skills in technology and cybersecurity.</p>
                    </div>
                </div>
            </div>

            <div className="bg">
                <div className="mhr_container">
                    <a href="https://mhrglobal.com/uk/en?_gl=1*gyk2af*_up*MQ..*_gs*MQ..&gclid=Cj0KCQiA5uDIBhDAARIsAOxj0CGeh2sXWgjjNvikeN7pDfy9kBpJu6Ig9NIilN8Uc0ezQoSq6g12rw8aAif0EALw_wcB&gclsrc=aw.ds&gbraid=0AAAAAD84ZFnMLq5CrPAHSZjlRYLkIK9Iy" target="_blank">
                        <img src="/assets/edited-mhr.png" alt="Upcoming Work Experience" />
                    </a>
                    <div id="upcomingWorkExperience">
                        <p>Upcoming Work Experience – MHR Global (Cybersecurity & Software Development)
                            On the 26th of January, I will begin a five-day work experience placement at MHR Global, where I’ll be spending three days with the Cybersecurity team and two days with the Software Development team. This opportunity will give me direct exposure to how security and engineering work together inside a professional tech environment.</p>

                        <p>During the cybersecurity portion, I expect to learn about real-world security practices such as threat identification, system monitoring, risk management, and the processes used to keep company and customer data safe.</p>

                        <p>In the software development section, I will be learning how developers collaborate on projects, write and maintain code, and apply modern development tools and workflows.</p>

                        <p>This experience will help me grow both technically and professionally, and I’m excited to learn from experienced engineers while gaining a clearer understanding of the career path I want to follow.</p>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Home;