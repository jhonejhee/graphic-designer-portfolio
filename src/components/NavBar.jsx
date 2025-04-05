import { Circle } from "lucide-react";

function NavBar() {
  return (
    <nav class="bg-transparent border-gray-200 h-fit">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-6 py-10">
            <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <span class="self-center text-lg font-normal whitespace-nowrap text-white flex items-center gap-2">
                    <Circle className="text-green-400 w-4 h-4 p-0" fill="#66bb6a" strokeWidth={0}/>
                    available for
                    <span  className="text-accent">work</span>
                    </span>
            </a>
            <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul class="font-medium text-xl flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 ">
                    <li>
                        <a href="#" class="relative text-lg font-normal text-white cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-300 before:absolute before:bg-accent before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-300 after:absolute after:bg-accent after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]" aria-current="page">FACEBOOK</a>
                    </li>
                    <li>
                        <a href="#" class="relative text-lg font-normal text-white cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-300 before:absolute before:bg-accent before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-300 after:absolute after:bg-accent after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]" aria-current="page">INSTAGRAM</a>
                    </li>
                    <li>
                        <a href="#" class="relative text-lg font-normal text-white cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-300 before:absolute before:bg-accent before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-300 after:absolute after:bg-accent after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]" aria-current="page">LINKEDIN</a>
                    </li>
                </ul>
            </div>
            <div class="hidden w-full lg:block md:w-auto">
                <a href="mailto:jiannina.ayon@gmail.com" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <span class="self-center text-lg font-normal whitespace-nowrap text-white font-normal hover:text-accent transition-all ease-in-out duration-300">JIANNINA.AYON@GMAIL.COM</span>
                </a>
            </div>
        </div>
    </nav>
  );
}

export default NavBar;
