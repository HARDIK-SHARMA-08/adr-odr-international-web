import React from 'react'

const About = () => {
    return (
        <section className="relative py-20 bg-white overflow-hidden">
            <div className="container px-4 mx-auto">
                <img className="absolute bottom-0 right-0 w-52 md:w-auto" src="https://static.shuffle.dev/components/preview/2f808e47-944e-42cf-b821-2358251e0600/assets/public/saturn-assets/images/headers/star-header-right-bottom.png" alt="" />
                <h2 className="mb-5 text-6xl md:text-7xl font-bold font-heading text-center tracking-px-n leading-tight">
                    ADR ODR International
                </h2>
                <p className="mb-10 text-lg text-gray-600 text-center font-medium leading-normal md:max-w-xl mx-auto">
                    ADR ODR international is the thought leader in progressive dispute resolution and training from
                    international conflict management to negotiation, mediation and arbitration.
                </p>
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-row items-center justify-center">
                        <div className="w-full sm:w-1/2 lg:w-1/4 p-6 lg:p-10">
                            <img className="mx-auto" src="https://irp-cdn.multiscreensite.com/41f86f94/dms3rep/multi/2021+Logo_CMC+Mediation+Provider.png" alt="" />
                        </div>
                        <div className="w-full sm:w-1/2 lg:w-1/4 p-6 lg:p-10">
                            <img className="mx-auto" src="https://irp-cdn.multiscreensite.com/41f86f94/dms3rep/multi/l2.png" alt="" />
                        </div>
                        <div className="w-full sm:w-1/2 lg:w-1/4 p-6 lg:p-10">
                            <img className="mx-auto" src="https://irp-cdn.multiscreensite.com/41f86f94/dms3rep/multi/l3.png" alt="" />
                        </div>
                        <div className="w-full sm:w-1/2 lg:w-1/4 p-6 lg:p-10">
                            <img className="mx-auto" src="https://irp-cdn.multiscreensite.com/41f86f94/dms3rep/multi/4.png" alt="" />
                        </div>
                        <div className="w-full sm:w-1/2 lg:w-1/6 p-6 lg:p-10">
                            <img className="mx-auto" src="https://irp-cdn.multiscreensite.com/41f86f94/dms3rep/multi/IMI+logo.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="max-w-max mx-auto"><a className="inline-flex items-center text-indigo-600 hover:text-indigo-700" href="#"></a></div>
            </div>
        </section>
    )
}

export default About
