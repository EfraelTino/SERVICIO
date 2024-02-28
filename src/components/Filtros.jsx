function Filtros ({categoria}){
    console.log("CATEGORIA EN FILTRO: ", categoria)
    return (
        <div className="basis-1/5">
                            <h3 className="text-blaack font-bold text-3xl dark:text-white">
                                Filtros
                            </h3>
                            <aside className="row">
                                <div className="row">
                                    <div className="block max-w-sm p-3 bg-white border border-gray200 rounded-lg 
                                shadow hover:bg-light dark:bg-bgdark dark:border-gray my-6">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">Categorias</h5>
                                        <form className="accordion-body mt-3">
                                            <div className="form-check">
                                                <input value="" id="category1" name="candidates" type="checkbox" className="h-4 w-4 rounded border-green focus:ring-green" />
                                                <label className="ml-2 dark:text-white" htmlFor="category1">Fashion</label>
                                            </div>
                                            <div className="form-check">

                                                <input value="" id="category1" name="candidates" type="checkbox" className="h-4 w-4 rounded border-green focus:ring-green" />
                                                <label className="ml-2 dark:text-white" htmlFor="category1">Fashion</label>
                                            </div>
                                            <div className="form-check">
                                                <input value="" id="category1" name="candidates" type="checkbox" className="h-4 w-4 rounded border-green focus:ring-green" />
                                                <label className="ml-2 dark:text-white" htmlFor="category1">Fashion</label>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="block max-w-sm p-3 bg-white border border-gray200 rounded-lg 
                                shadow hover:bg-light dark:bg-bgdark dark:border-gray mt-5">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">Categorias</h5>
                                        <form className="accordion-body mt-3">
                                            <div className="form-check">
                                                <input value="" id="category1" name="candidates" type="checkbox" className="h-4 w-4 rounded border-green focus:ring-green" />
                                                <label className="ml-2 dark:text-white" htmlFor="category1">Fashion</label>
                                            </div>
                                            <div className="form-check">

                                                <input value="" id="category1" name="candidates" type="checkbox" className="h-4 w-4 rounded border-green focus:ring-green" />
                                                <label className="ml-2 dark:text-white" htmlFor="category1">Fashion</label>
                                            </div>
                                            <div className="form-check">
                                                <input value="" id="category1" name="candidates" type="checkbox" className="h-4 w-4 rounded border-green focus:ring-green" />
                                                <label className="ml-2 dark:text-white" htmlFor="category1">Fashion</label>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </aside>
                        </div>
    );
}
export default Filtros