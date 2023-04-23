import About from "@/components/About"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
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

    {/* // skills  */}

    {/* // project  */}

    {/* // contact me  */}

    </div>
  )
}

export default index