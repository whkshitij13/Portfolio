import About from "@/components/About"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
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
    <section id="skills" className="snap-center">
    <Skills />
    </section>

    {/* // project  */}

    {/* // contact me  */}

    </div>
  )
}

export default index