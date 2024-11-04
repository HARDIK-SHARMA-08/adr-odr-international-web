import React from 'react'

const Footer = () => {
    return (
        <section className="py-10 bg-gray-100">
            <div className="container px-4 mx-auto">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-row -mx-4 py-14 items-center justify-center">
                        <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                            <div className="max-w-md mx-auto lg:mx-0">
                                <h3 className="max-w-sm font-heading text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                                    <span>Subscribe to our</span>
                                    <span className="font-serif italic ml-4">newsletter</span>
                                    <span>?</span>
                                </h3>
                                <p className="max-w-sm text-gray-500 mb-16">If there are questions you want to ask, we will answer all your question</p>
                                <div className="sm:flex mb-2 items-center">
                                    <input className="w-full mb-3 sm:mb-0 sm:mr-4 pb-4 bg-transparent border-b border-gray-200 text-sm text-gray-900 placeholder-gray-400 outline-none" type="email" placeholder="Enter your email" />
                                    <button className="relative group inline-block flex-shrink-0 w-full sm:w-auto py-3 px-5 text-sm font-semibold text-red-70 bg-red-700 rounded-full overflow-hidden" type="submit">
                                        <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                                        <span className="relative text-white">Subscribe</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='w-full lg:w-1/2 px-4 mb-12 lg:mb-0 flex flex-col gap-8'>
                            <span className='text-center text-gray-400'>
                                ADR ODR International is a supporter of and signatory to the
                                World Mediators Alliance on Climate Change (WoMACC) Green Pledge.
                            </span>
                            <div className="flex flex-wrap gap-10 items-center justify-center">
                                <div className="w-full sm:w-1/2 lg:w-1/4 ">
                                    <img className="mx-auto" src="https://irp-cdn.multiscreensite.com/41f86f94/dms3rep/multi/2021+Logo_CMC+Mediation+Provider.png" alt="" />
                                </div>
                                <div className="w-full sm:w-1/2 lg:w-1/4">
                                    <img className="mx-auto" src="https://irp-cdn.multiscreensite.com/41f86f94/dms3rep/multi/l2.png" alt="" />
                                </div>
                                <div className="w-full sm:w-1/2 lg:w-1/4">
                                    <img className="mx-auto" src="https://irp-cdn.multiscreensite.com/41f86f94/dms3rep/multi/l3.png" alt="" />
                                </div>
                                <div className="w-full sm:w-1/2 lg:w-1/4">
                                    <img className="mx-auto" src="https://irp-cdn.multiscreensite.com/41f86f94/dms3rep/multi/4.png" alt="" />
                                </div>
                                <div className="w-full sm:w-1/2 lg:w-1/6">
                                    <img className="mx-auto mix-blend-multiply" src="https://irp-cdn.multiscreensite.com/41f86f94/dms3rep/multi/IMI+logo.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-10 border-t border-gray-200">
                        <div className="lg:flex items-center">
                            <img src="./logo.png" alt="" className='w-1/6 mr-12' />

                            <div className="flex mb-6 lg:mb-0 items-center">
                                <a className="inline-block mr-4 sm:mr-10 text-sm font-semibold text-gray-500 hover:text-gray-600" href="#">
                                    Privacy Policy
                                </a>
                                <a className="inline-block mr-4 sm:mr-10 text-sm font-semibold text-gray-500 hover:text-gray-600" href="#">
                                    Terms & Conditions
                                </a>
                                <a className="inline-block text-sm font-semibold text-gray-500 hover:text-gray-600" href="#">
                                    Support
                                </a>
                            </div>
                            <span className="inline-block ml-auto text-sm text-gray-500">© All Rights Reserved</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
