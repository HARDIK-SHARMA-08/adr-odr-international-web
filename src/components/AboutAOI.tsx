import React from 'react'

const AboutAOI = () => {
    return (
        <section className="relative py-12">
            <div className="hidden md:block absolute top-20 left-0 w-1/6 z-0 lg:w-2/6 h-1/4 bg-blue-50 rounded-br-full rounded-tr-full"></div>
            <div className="hidden md:block absolute bottom-[30%] right-0 w-1/6 z-0 lg:w-1/6 h-1/6 bg-red-50 rounded-bl-full rounded-tl-full"></div>
            <div className="container px-4 mx-auto z-20">
                <div className="flex items-center flex-wrap mb-20 mt-14 -mx-8">
                    <div className="w-full lg:w-1/2 p-8 z-20">
                        <img className="rounded-3xl w-full" src="https://static.shuffle.dev/components/preview/0066bef8-104a-41d9-bd92-894baaa0dfce/assets/public/solstice-assets/images/about/picture5.png" alt="" />
                    </div>
                    <div className="w-full lg:w-1/2 p-8">
                        <div className="py-1 px-3 rounded-lg border border-red-100 bg-red-50 inline-flex items-center gap-2 mb-6 mt-12">
                            <span className="text-red-500 text-sm font-medium">About Us</span>
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold font-heading mb-6 max-w-md lg:max-w-2xl">Pioneering the Future of Dispute Resolution</h1>
                        <p className="text-gray-600 text-lg mb-12">Headquatered in London with a presence in various international cities spanning 45 countries and over 200 dispute resolution professionals, ADR ODR International is the leading alternative and online dispute resolution provider. Responding to the changing landscape of dispute resolution and the greater need to integrate technology and efficiency, ADR ODR International is the first organisation to respond and pave the way towards positive change. From E-learning to online mediation, ADR ODR International is the traditional with the contemporary to create tomorrows digital peacemakers. </p>
                    </div>
                </div>
                <h2 className="text-4xl font-bold font-heading mb-10 z-20">Our values</h2>
                <div className="flex flex-wrap mb-32">
                    <div className="w-full lg:w-1/2 pr-8">
                        <div className="relative">
                            <div className="absolute top-0 left-0 bg-red-500 w-0.5 h-6"></div>
                            <div className="pl-8 pb-12">
                                <h2 className="text-2xl font-bold font-heading mb-4">Passion for Innovation</h2>
                                <p className="text-gray-600">We thrive on a relentless passion for innovation. We constantly challenge the status quo, seeking out creative solutions and pushing the boundaries of what's possible.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="relative">
                            <div className="absolute top-0 left-0 bg-red-500 w-0.5 h-6"></div>
                            <div className="pl-8">
                                <h2 className="text-2xl font-bold font-heading mb-4">Collaborative Community</h2>
                                <p className="text-gray-600">We foster an inclusive and supportive environment where every voice is heard, and diverse perspectives contribute to our collective success. Together, we achieve more.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutAOI
