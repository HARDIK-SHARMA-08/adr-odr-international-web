import { ArrowBigDown, Badge, BadgeCheckIcon, BuildingIcon, ChevronDown, ContactIcon, Globe, Globe2Icon, Map, MessageCircleHeart, ShieldAlert, UniversityIcon, WholeWord } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [prevOffset, setPrevOffset] = useState(0);
  const [visible, setVisible] = useState(true);


  const toggleVisible = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > prevOffset) {
      setScrollDirection("down");
    } else if (currentScrollPos < prevOffset) {
      setScrollDirection("up");
    }
    setPrevOffset(currentScrollPos);
    setVisible(currentScrollPos < 10 || scrollDirection === "up");
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, [prevOffset]);

  return (
    <section>
      <nav className={`fixed top-0 w-full py-6 bg-white z-30 border-b-[0.5px] shadow-sm tansition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between">
            <a className="inline-block text-lg font-semibold" href="#">
              <img className="h-10" src="./logo.png" alt="Company Logo" width="auto" />
            </a>
            <div className="xl:hidden">
              <button
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                aria-label="Toggle Mobile Menu"
                className="flex w-12 h-12 items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-md transition duration-200"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M3 6H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M3 18H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </button>
            </div>
            <ul className="hidden xl:flex lg:space-x-8">
              <li>
                <a className="text-sm text-gray-700 hover:text-red-700 font-semibold" href="#">
                  Home
                </a>

              </li>
              <li className='group relative'>
                <a className="text-sm text-gray-700 hover:text-red-700 font-semibold inline-flex items-center" href="#">
                  About <ChevronDown className="h-4 text-black group-hover:text-red-700 group-hover:rotate-180 duration-300" />
                </a>
                <div className="hidden group-hover:flex flex-col absolute top-full -right-1/2 min-w-max p-4 z-50 bg-white border border-gray-100 rounded-3xl shadow-md">
                  <a className="inline-flex py-3 px-4 text-sm text-gray-700 hover:bg-red-50 rounded-lg border-b border-gray-200" href="#">
                    <Globe className="mr-2" /> Global Network
                  </a>
                  <a className="inline-flex py-4 px-4 text-sm text-gray-700 hover:bg-red-50 rounded-lg border-b border-gray-200" href="#">
                    <BuildingIcon className="mr-2" /> Building Solutions
                  </a>
                  <a className="inline-flex py-4 px-4 text-sm text-gray-700 hover:bg-red-50 rounded-lg border-b border-gray-200" href="#">
                    <Globe className="mr-2" /> International Facility
                  </a>
                  <a className="inline-flex py-4 px-4 text-sm text-gray-700 hover:bg-red-50 rounded-lg border-b border-gray-200" href="#">
                    <BadgeCheckIcon className="mr-2" /> Acceradation
                  </a>
                  <a className="inline-flex py-3 px-4 text-sm text-gray-700 hover:bg-red-50 rounded-lg" href="#">
                    <ContactIcon className="mr-2" /> Contact
                  </a>
                </div>
              </li>
              <li className='group relative'>
                <a className="text-sm text-gray-700 hover:text-red-700 font-semibold inline-flex items-center" href="#">
                  Services
                  <ChevronDown className="h-4 text-black group-hover:text-red-700 group-hover:rotate-180 duration-300" />
                </a>
                {/* <div className="hidden group-hover:flex flex-row gap-4 absolute top-full -left-1/2 min-w-max p-4 z-50 bg-white border border-gray-100 rounded-3xl shadow-md">
                  <div className='flex flex-col gap-4'>
                    <a className="relative h-20 p-6 flex items-center justify-center text-sm text-gray-700 hover:bg-blue-100 border border-blue-200 rounded-lg bg-blue-50" href="#">
                      <Globe className="absolute z-0 text-blue-200" size={70} />
                      <span className='font-semibold text-blue-900 z-20'>
                        Choose Country
                      </span>
                    </a>
                    <a className="relative h-20 p-6 flex items-center justify-center text-sm text-gray-700 hover:bg-amber-100 border border-amber-200 rounded-lg bg-amber-50" href="#">
                      <ShieldAlert className="absolute z-0 text-amber-200" size={70} />
                      <span className='font-semibold text-amber-900 z-20'>
                        Complaints Procedure
                      </span>
                    </a>
                    <a className="relative h-20 p-6 flex items-center justify-center text-sm text-gray-700 hover:bg-red-100 border border-red-200 rounded-lg bg-red-50" href="#">
                      <UniversityIcon className="absolute z-0 text-red-200" size={70} />
                      <span className='font-semibold text-red-900 z-20'>
                        UK University Courses
                      </span>
                    </a>
                  </div>
                  <div>
                    <a className="relative h-full p-8 flex items-center justify-center text-sm text-gray-700 hover:bg-green-100 border border-green-200 rounded-lg bg-green-50" href="#">
                      <MessageCircleHeart className="absolute z-0 text-green-200" size={100} />
                      <span className='font-semibold text-green-900 z-20'>
                        Testimonials
                      </span>
                    </a>
                  </div>
                </div> */}
              </li>
              <li>
                <a className="text-sm text-gray-700 hover:text-red-700 font-semibold inline-flex items-center" href="#">Training
                  <ChevronDown className="h-4 text-black" />
                </a>
              </li>
              <li>
                <a className="text-sm text-gray-700 hover:text-red-700 font-semibold inline-flex items-center" href="#">Events
                  <ChevronDown className="h-4 text-black" />
                </a>
              </li>
              <li>
                <a className="text-sm text-gray-700 hover:text-red-700 font-semibold" href="#">Specials</a></li>
              <li><a className="text-sm text-gray-700 hover:text-red-700 font-semibold" href="#">DDRS Diploma</a></li>

            </ul>
            <div className="hidden xl:flex items-center space-x-6">
              <a className="relative group py-3 px-4 text-sm font-sem-font-semibold text-red-700 hover:text-red-50 bg-red-50 rounded-md overflow-hidden transition duration-300" href="#">
                <div className="absolute top-0 right-full w-full h-full bg-red-700 transform group-hover:translate-x-full transition duration-500"></div>
                <span className="relative">Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 bg-gray-900 bg-opacity-25 transition-all ${mobileNavOpen ? 'block' : 'hidden'}`}
        onClick={() => setMobileNavOpen(false)}
      />
      <div className={`fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50 bg-white border-r transition-transform transform ${mobileNavOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <nav className="relative flex flex-col py-6 px-10 w-full h-full bg-white overflow-y-auto">
          <div className="flex items-center mb-16">
            <a className="mr-auto text-2xl font-semibold leading-none" href="#">
              <img className="h-10" src="saturn-assets/logos/logo-saturn-dark.svg" alt="Company Logo" width="auto" />
            </a>
            <button onClick={() => setMobileNavOpen(false)} aria-label="Close Mobile Menu">
              <svg className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul className="space-y-4">
            <li><a className="block py-4 px-5 text-gray-700 hover:bg-red-50 rounded-lg" href="#">About Us</a></li>
            <li><a className="block py-4 px-5 text-gray-700 hover:bg-red-50 rounded-lg" href="#">Featured</a></li>
            <li><a className="block py-4 px-5 text-gray-700 hover:bg-red-50 rounded-lg" href="#">Solutions</a></li>
            <li><a className="block py-4 px-5 text-gray-700 hover:bg-red-50 rounded-lg" href="#">Products</a></li>
            <li><a className="block py-4 px-5 text-gray-700 hover:bg-red-50 rounded-lg" href="#">Articles</a></li>
          </ul>
          <div className="py-8 px-6 mt-6 border-t border-gray-200">
            <a className="flex items-center text-sm font-sem-font-semibold text-red-700 hover:text-red-600" href="#">
              <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.3337 6.05833C17.2811 5.9059 17.1854 5.77202 17.0582 5.67292C16.931 5.57381 16.7777 5.51374 16.617 5.5L11.8754 4.80833L9.75038 0.499999C9.68215 0.359106 9.5756 0.240284 9.44296 0.157143C9.31031 0.0740025 9.15752 0.0303953 9.00038 0.0303953C8.84324 0.0303953 8.69046 0.0740025 8.55781 0.157143C8.42517 0.240284 8.31861 0.359106 8.25038 0.499999L6.12538 4.80833L1.38371 5.5C1.22306 5.51374 1.0697 5.57381 0.942509 5.67292C0.815319 5.77202 0.719572 5.9059 0.666965 6.05833C0.613195 6.20943 0.605339 6.37314 0.644088 6.52978C0.682836 6.68643 0.766408 6.82912 0.88371 6.94167L4.21704 10.1583L3.38371 14.8083C3.3575 14.9502 3.36988 15.0954 3.41943 15.2296C3.46899 15.3639 3.55358 15.4819 3.66371 15.5714C3.77385 15.6609 3.9046 15.7186 4.04565 15.7389C4.1867 15.7592 4.33145 15.7412 4.46696 15.6861L9.00038 13.8083L13.5337 15.6861C13.6692 15.7412 13.8139 15.7592 13.955 15.7389C14.0961 15.7186 14.2268 15.6609 14.337 15.5714C14.4471 15.4819 14.5317 15.3639 14.5813 15.2296C14.6308 15.0954 14.6432 14.9502 14.617 14.8083L13.7837 10.1583L17.117 6.94167C17.2343 6.82912 17.3179 6.68643 17.3566 6.52978C17.3954 6.37314 17.3875 6.20943 17.3337 6.05833Z" fill="#F1B44C"></path>
              </svg>
              <span className="ml-2">hello@shuffle.dev</span>
            </a>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
