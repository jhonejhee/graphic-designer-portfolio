import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import Home from "./Home";
import About from "./About";

const sections = [
  { name: "Home", href: "#home", section: <Home /> },
  { name: "About", href: "#about", section: <About /> },
  // { name: "Portfolio", href: "#portfolio" },
  // { name: "Contact", href: "#contact" },
]

function Portfolio() {
  return (
    <div
        className="h-fit w-full overflow-auto font-poppins select-none flex flex-col items-center justify-center uppercase"
        style={{
          backgroundImage: "url('/images/background-landscape.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
    >
      <div className="h-fit w-full flex flex-col items-center justify-center  max-w-screen-xl">
        {/* Nav Bar */}
        <NavBar/>

        {/* Sections */}
        <main className="h-full w-full">
          {sections.map((section) => (
            <div key={section.name} id={section.href.slice(1)} className="h-screen w-full flex items-center justify-center">
              {section.section}
            </div>
          ))}
        </main>
      </div>
    </div>
  );
} 

export default Portfolio;
