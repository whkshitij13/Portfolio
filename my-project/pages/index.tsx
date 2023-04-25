import About from "@/components/About"
import ContactMe from "@/components/ContactMe"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import WorkExperience from "@/components/WorkExperience"
import Head from "next/head"

const index = () => {
  return (
    <div className="bg-gradient-to-r from-black from via-gray-700 to-black   text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
    <Head>
      <title>Kshitij's Portfolio</title>
    </Head>

    {/* // header  */}
     <Header />
    {/* // hero  */}
    <section id="hero" className="snap-start">
      <Hero />
    </section>
    {/* // about */}
    <section id="about" className="snap-center">
    <About />
    </section>
    {/* // experience  */}
    <section id="experience" className="snap-center">
      <WorkExperience />
    </section>
    {/* // skills  */}
    <section id="skills" className="snap-start">
    <Skills />
    </section>

    {/* // project  */}
    <section id="projects" className="snap-start">
      <Projects />
    </section>
    {/* // contact me  */}
    <section id="contact" className="snap-start">
      <ContactMe />
    </section>
    </div>
  )
}

export default index