import Main from "@app/components/Main";
import About from '@app/components/About'
import Contact from '@app/components/Contact'
import Services from '@app/components/Services'




const Home = () => {
  return (
  <section className="w-full flex-center flex-col" /*we want the page to take the whole screen, to be centered, and to stack over each other */>
  <Main />
    <About />
    <Services /> 
    <Contact />
    </section>
  )
}

export default Home