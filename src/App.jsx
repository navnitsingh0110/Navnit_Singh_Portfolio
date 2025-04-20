
import AboutMeMain from './components/About/AboutMeMain'
import HeroGradient from './components/Hero/HeroGradient'
import HeroMain from './components/Hero/HeroMain'
import SubHeroSection from './components/Hero/SubHeroSection'
import NavbarMain from './components/Navbar/NavbarMain'
import SkillsMain from './components/Skills/SkillsMain'
import SubSkills from './components/Skills/SubSkills'
import ExperienceMain from './components/Experience/ExperienceMain'
import ProjectsMain from './components/Projects/ProjectsMain'
import ContactMeMain from './components/Contact/ContactMeMain'
import FooterMain from './components/Footer/FooterMain'

function App() {

  return (
    <main>
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      <ExperienceMain />
      <ProjectsMain />
      <ContactMeMain />
      <FooterMain />
    </main>
  )
}

export default App
