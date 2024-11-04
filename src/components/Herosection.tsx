import React from 'react'

const Herosection = () => {
    return (
        <section className="relative h-screen overflow-hidden">
            <img className="absolute -bottom-20 left-0" src="https://static.shuffle.dev/components/preview/f47e4207-4c02-4c08-a829-05700d61a77b/assets/public/saturn-assets/images/headers/light-orange-blue-1.png" alt="" />
            <nav className="relative mb-12 md:mb-24 bg-transparent z-50">
                <div className="container px-4 mx-auto"></div>
            </nav>
            <div className="relative container px-4 mx-auto pt-24 lg:pt-6">
                <div className="flex flex-wrap -mx-4 items-center">
                    <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
                        <div className="max-w-xl mx-auto lg:mx-0 lg:max-w-3xl relative z-10">
                            <span className="inline-block py-2 px-5 mb-8 font-semibold text-red-700 bg-red-50 rounded-full">Making the world a better place!</span>
                            <h1 className="font-heading text-5xl xs:text-2xl md:text-5xl xl:text-6xl mb-8 font-bold text-gray-900">
                                <span>
                                    International Provider of Dispute
                                    Resolution & Professional Training
                                </span>
                                <p className='text-gray-500 text-lg font-medium mt-6'>
                                  Bridging the gap between traditional face-to-face ADR and the digital world of ODR
                                </p>
                            </h1>

                            <div className="lg:flex mb-24 items-center">
                                <a className="relative group inline-block w-full sm:w-auto py-4 px-8 text-white font-semibold bg-red-600 rounded-md overflow-hidden" href="#">
                                    <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                                    <div className="relative flex items-center justify-center">
                                        <span className="mr-4">Meet Our Experts</span>
                                        <span>
                                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.83 5.29L2.59 1.05C2.49704 0.956274 2.38644 0.881879 2.26458 0.83111C2.14272 0.780342 2.01202 0.754204 1.88 0.754204C1.74799 0.754204 1.61729 0.780342 1.49543 0.83111C1.37357 0.881879 1.26297 0.956274 1.17 1.05C0.983753 1.23736 0.879211 1.49082 0.879211 1.755C0.879211 2.01919 0.983753 2.27264 1.17 2.46L4.71 6L1.17 9.54C0.983753 9.72736 0.879211 9.98082 0.879211 10.245C0.879211 10.5092 0.983753 10.7626 1.17 10.95C1.26344 11.0427 1.37426 11.116 1.4961 11.1658C1.61794 11.2155 1.7484 11.2408 1.88 11.24C2.01161 11.2408 2.14207 11.2155 2.26391 11.1658C2.38575 11.116 2.49656 11.0427 2.59 10.95L6.83 6.71C6.92373 6.61704 6.99813 6.50644 7.04889 6.38458C7.09966 6.26272 7.1258 6.13201 7.1258 6C7.1258 5.86799 7.09966 5.73728 7.04889 5.61543C6.99813 5.49357 6.92373 5.38297 6.83 5.29Z" fill="#FFF2EE"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 lg:h-1/2 px-4">
                        <div className="relative max-w-xl lg:max-w-lg mx-auto lg:mr-0">
                            <img className="relative block h-112 md:h-96 object-cover object-top rounded-3xl w-full" src="https://static.shuffle.dev/components/preview/2f808e47-944e-42cf-b821-2358251e0600/assets/public/saturn-assets/images/headers/image-blue-header.png" alt="" />
                            <div className="absolute -bottom-32 right-0 p-7">
                                <div className="p-6 bg-white border-2 border-gray-300 rounded-2xl">
                                    <div className="flex mb-14 items-center">
                                        <img className="w-10 h-10" src="saturn-assets/images/headers/avatar4.png" alt="" />
                                        <img className="w-10 h-10 -ml-2" src="saturn-assets/images/headers/avatar3.png" alt="" />
                                        <img className="w-10 h-10 -ml-2" src="saturn-assets/images/headers/avatar2.png" alt="" />
                                        <img className="w-10 h-10 -ml-2" src="saturn-assets/images/headers/avatar1.png" alt="" />
                                        <div className="p-px bg-white rounded-full -ml-2">
                                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200">
                                                <span className="font-semibold">5K+</span>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="block mb-2 text-4xl font-bold">20+</span>
                                    <span className="font-medium text-gray-900">Awwards Winning</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Herosection
