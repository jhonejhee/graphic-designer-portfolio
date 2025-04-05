import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

function Portfolio() {
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
        </main>

        
    </div>
  );
} 

export default Portfolio;
