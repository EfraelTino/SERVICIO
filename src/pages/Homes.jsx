import { FaSearch } from "react-icons/fa";

function Home() {
    return (
        <div className="bg-white dark:bg-bgdark py-4 dark:bgdark ">
            <div className="cl-normal">
                <div className="column mt-5">
                    <div className="flex w-full justify-between flex-wrap">
                        <div className="w-3/5  flex pr-16">
                            <div className="row mt-20">
                                <div className="row mb-7">
                                    <div>
                                        <p className="px-4 py-1 bg-greenbajo w-fit rounded dark:text-greenhover font-semibold">
                                            Conectamos proveedores con compradores
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <h1 className="bg-#bfc0c9 font-bold text-5xl dark:text-white text-justify leading-none">
                                        Conecta con productores y encuentra <span className="text-green">todo lo que estás buscando</span>
                                    </h1>
                                </div>
                                <div className="row mt-8">
                                    <p className="dark:text-bodycolor text-lg">
                                        Somos una paltaforma que tiene como objetivo <span className="text-green">conectar</span> a proveedores con usuarios finales
                                        para <span className="text-green">reducir los costos</span> de envío y que los usuarios
                                        finales puedan comprar a un precio accesible
                                    </p>
                                </div>
                                <div className="row mt-8">
                                    <form className="basis-4">
                                        <div className="relative">
                                            
                                            <input type="text" id="email-address-icon" className=" bg-white border border-gray200 text-gray-900 text-md rounded-lg focus:ring-gray focus:border-gray focus-visible:border-gray-200  block w-full  p-5  dark:bg-bgdark dark:border-gray dark:placeholder-bodycolor dark:text-bodycolor  dark:focus:border-gray z-0 none-focus" placeholder="¿Qué es lo que buscas?..." />
                                            <div className="absolute inset-y-0 end-5 flex items-center ps-3.5 ">
                                                <button type="submit" className="text-light px-8 cursor-pointer z-10 py-2.5 font-semibold text-md rounded-md dark:text-light bg-green hover:bg-bgdark hover:dark:bg-greenbajo dark:hover:text-black">
                                                    Buscar
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="row mt-8">
                                    <div className="flex flex-row">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-2/5">
                            <img src="https://mizzle.webestica.com/assets/images/bg/01.jpg" alt="" className="rounded-lg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;