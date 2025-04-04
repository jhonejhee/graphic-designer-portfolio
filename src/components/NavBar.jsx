
function NavBar() {
  return (
    <nav class="bg-transparent border-gray-200 h-16">
        <div class="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4 py-12">
            <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" /> */}
                <span class="self-center text-xl font-semibold whitespace-nowrap text-white font-normal">🟢 available for <span  className="text-accent">work</span> </span>
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
                        <a href="#" class="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0 underline" aria-current="page">FACEBOOK</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0 underline" aria-current="page">INSTAGRAM</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0 underline" aria-current="page">LINKEDIN</a>
                    </li>
                </ul>
            </div>
            <div class="hidden w-full lg:block md:w-auto">
                <a href="mailto:jiannina.ayon@gmail.com" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <span class="self-center text-xl font-semibold whitespace-nowrap text-white font-normal">JIANNINA.AYON@GMAIL.COM</span>
                </a>
            </div>
        </div>
    </nav>
  );
}

export default NavBar;
