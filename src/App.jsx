import { useState, useEffect, CSSProperties } from "react"
import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Footer } from "./components"
import PulseLoader from "react-spinners/PulseLoader";


const override = {
  display: "block",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 9999, // Ensures the loader is above other content
};
const App = () => {
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)

  }, [])


  return (
    <BrowserRouter className={loading ? "bg-[#050816] p-[100px]" : ""}>
      {loading ?
        <div
          style={{
            backgroundColor: "#050817",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 9998, // Layer below the loader itself
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PulseLoader
            color="#915eff"
            cssOverride={override}
            margin={10}
            size={20}
          />
        </div>
        :
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          <Footer/>
          </div>


        </div>
      }

    </BrowserRouter>

  )
}

export default App
