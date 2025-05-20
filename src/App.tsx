import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { AboutUs } from "./components/sections/AboutUs";
import { Numbers } from "./components/sections/Numbers";
import { OurProjects } from "./components/sections/OurProjects";
import { Contact } from "./components/sections/Contact";
import { Blog } from "./components/pages/Blog";
import { Portfolio } from "./components/pages/Portfolio";

function App() {
  return (
    <Router>
      <Layout title="Alecs Studio">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="hero">
                  <Hero />
                </section>
                <section id="services">
                  <Services />
                </section>
                <section id="about-us">
                  <AboutUs />
                </section>
                <section id="numbers">
                  <Numbers />
                </section>
                <section id="our-projects">
                  <OurProjects />
                </section>
                <section id="contact">
                  <Contact />
                </section>
              </>
            }
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
