import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

function Portfolio() {
  return (
    <div
        className="h-screen w-full overflow-hidden font-poppins select-none"
        style={{backgroundImage: "url('/images/background-landscape.png')", backgroundSize: 'cover'}}
    >
        <NavBar/>
        
        <main className="h-full w-full">
            <Outlet />
        </main>


    </div>
  );
}

export default Portfolio;
