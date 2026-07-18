import Head from 'next/head';
import Header from '../components/Header';
import HomeSection from '../components/HomeSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Portfolio() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans">
      <Head>
        <title>NZASINGIZIMANA Jean Bonheur - Portfolio</title>
        <meta name="description" content="Professional portfolio of Jean Bonheur, Web Developer & UI/UX Designer" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="pt-20">
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}