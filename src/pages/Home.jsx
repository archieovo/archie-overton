import './Home.scss'
import Hero from '../components/sections/Hero';
import Skills from '../components/sections/Skills';
import Education from '../components/sections/Education';
import Projects from '../components/sections/Projects';
import InterestInTech from '../components/sections/InterestInTech';
import WorkExperience from '../components/sections/WorkExperience';
import Contact from '../components/sections/Contact';

function Home() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="home-page">
      <Hero scrollToSection={scrollToSection} />
      <Skills />
      <Education />
      <Projects />
      <InterestInTech />
      <WorkExperience />
      <Contact />
    </div>
  )
}

export default Home
