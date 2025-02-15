import { FaClock } from "react-icons/fa6";

const DeveloperProfiles = [
    {
        avatar: "https://avatars.githubusercontent.com/u/81636077?v=4",
        name: "Md Azad",
        department: "Electrical Engineering",
        links: {
            phone: "",
            linkedin: "https://www.linkedin.com/in/modest-azad/",
            github: "https://github.com/themdazad",
            email: "mailto:collezian@gmail.com",
        },
    },
]
export const DeveloperCredit = () => {
    return (
        <main className="max-w-[1920px] m-auto flex flex-col gap-[4em] py-[4em] min-h-screen px-[5%]">
            <h1 className="text-xl sm:text-3xl md:text-5xl font-bold text-center mb-[3rem]">Development Memebers</h1>
            {/* Content Writer */}
            <section>
                <div className="tittle-bar flex items-center mb-[2rem] gap-6">
                    <h1 className="tittle-bar-heading text-lg sm:text-2xl md:text-3xl text-nowrap ">UX/UI Designer</h1>
                    <span className="bg-gray-500/30 h-[1px] w-full" />
                </div>

                {DeveloperProfiles.map((program, index) => {
                    return (
                        <div key={index} className="relative card bg-slate-500/10 border hover:border-1 border-gray-500/20  hover:border-sky-500/50 snap-center min-w-[15em] max-w-max min-h-max transition-all duration-300 rounded-3xl overflow-hidden">

                            <div className="card-content  p-[1em] ">
                                <h2 className="card-title  sm:text-lg">{program.name}</h2>
                                <p className="card-description text-[14px] mb-[1em] text-gray-500">{program.department}</p>

                                <div className="card_footer text-[14px] flex justify-between items-center">
                                    <div>
                                        <span className="text-gray-500 text-[14px] flex items-center gap-1">
                                            <FaClock /> From Jan 2025 - Current
                                        </span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </section>

            {/* Frontend */}
            <section>
                {/* Frontend */}
                <div className="tittle-bar flex items-center mb-[2rem] gap-6">
                    <h1 className="tittle-bar-heading text-lg sm:text-2xl md:text-3xl text-nowrap ">Frontend Developer</h1>
                    <span className="bg-gray-500/30 h-[1px] w-full" />
                </div>

                {DeveloperProfiles.map((program, index) => {
                    return (
                        <div key={index} className="relative card bg-slate-500/10 border hover:border-1 border-gray-500/20  hover:border-sky-500/50 snap-center min-w-[15em] max-w-max min-h-max transition-all duration-300 rounded-3xl overflow-hidden">

                            <div className="card-content  p-[1em] ">
                                <h2 className="card-title  sm:text-lg">{program.name}</h2>
                                <p className="card-description text-[14px] mb-[1em] text-gray-500">{program.department}</p>

                                <div className="card_footer text-[14px] flex justify-between items-center">
                                    <div>
                                        <span className="text-gray-500 text-[14px] flex items-center gap-1">
                                            <FaClock /> From Jan 2025 - Current
                                        </span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </section>

            {/* Backend Developer  */}
            <section>
                {/* Frontend */}
                <div className="tittle-bar flex items-center mb-[2rem] gap-6">
                    <h1 className="tittle-bar-heading text-lg sm:text-2xl md:text-3xl text-nowrap ">Backend Developer</h1>
                    <span className="bg-gray-500/30 h-[1px] w-full" />
                </div>

                {DeveloperProfiles.map((program, index) => {
                    return (
                        <div key={index} className="relative card bg-slate-500/10 border hover:border-1 border-gray-500/20  hover:border-sky-500/50 snap-center min-w-[15em] max-w-max min-h-max transition-all duration-300 rounded-3xl overflow-hidden">

                            <div className="card-content  p-[1em] ">
                                <h2 className="card-title  sm:text-lg">{program.name}</h2>
                                <p className="card-description text-[14px] mb-[1em] text-gray-500">{program.department}</p>

                                <div className="card_footer text-[14px] flex justify-between items-center">
                                    <div>
                                        <span className="text-gray-500 text-[14px] flex items-center gap-1">
                                            <FaClock /> From Jan 2025 - Current
                                        </span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </section>
        </main>
    )
}