import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { ChevronRight, ChevronLeft } from "lucide-react";

const pages = [
  { name: "Home", path: "/home" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
]

function Portfolio() {
  const [index, setIndex] = useState(0);
  const [path, setPath] = useState(pages[index].path);

  useEffect(() => {
    setPath(pages[index].path);
  }, [index]);

  useEffect(() => {
    console.log(path);
  }, [path]);

  return (
    <div
        className="h-screen w-full overflow-hidden font-poppins select-none"
        style={{
          backgroundImage: "url('/images/background-landscape.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
    >
        <NavBar/>
        
        <main className="h-full w-full relative">
          <Outlet />

          {/* Left Button */}
          <div className="fixed top-1/2 left-0 -translate-y-1/2 z-50">
            <button className="text-white p-2 hover:text-accent" onClick={() => setIndex((index - 1 + pages.length) % pages.length)}>
              <ChevronLeft className="h-10 w-10" />
            </button>
          </div>

          {/* Right Button */}
          <div className="fixed top-1/2 right-0 -translate-y-1/2 z-50">
            <button className="text-white p-2 hover:text-accent" onClick={() => setIndex((index + 1) % pages.length)}>
              <ChevronRight className="h-10 w-10" />
            </button>
          </div>
        </main>

        
    </div>
  );
} 

export default Portfolio;
