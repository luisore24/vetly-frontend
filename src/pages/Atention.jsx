import { NavLink } from "react-router-dom"
import TableServices from "../components/ui/TableServices"
import { use, useEffect, useState } from "react"
import axios from "axios"
import { useAppStore } from "../store/useAppStore"
import AttentionCard from "../components/AttentionCard/AttentionCard"


const Atention = () => {


    const [dataSearch, setDataSearch] = useState("")
    const [results, setResults] = useState([])
    const [itemCatalog, setItemcatalog] = useState(null)

    useEffect(() => {

        const delayDebounce = setTimeout(async () => {
            if (!dataSearch.trim()) {
                setResults([])
                return
            }
                

            try {
                const response = await axios.get(
                    `http://localhost:5400/api/v1/catalog/search?text=${dataSearch}`,
                    {
                        headers: {
                            Authorization: `Bearer ${useAppStore.getState().token}`
                        }
                    }
                )
                setResults(response.data)

            } catch (error) {
                console.error("Error fetching search:", error)
            }

        }, 500)


        return () => clearTimeout(delayDebounce)

    }, [dataSearch])


    return (

        <div className="flex flex-col">
            <div className="flex flex-col items-center">

                <div className="flex flex-row justify-start w-xl mb-4 my-5">
                    <span>Búsqueda de un Producto o Servicio</span>
                </div>

                <div className="w-xl flex mb-4">
                    <input type="text"
                        value={dataSearch}
                        placeholder="Buscar producto o servicio..."
                        onChange={(e) => setDataSearch(e.target.value)}
                        className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" />
                </div>

            </div>

            <div className="flex">

                {
                    results.length > 0 ? (

                        results.map((item, index) => {
                            console.log("Atention - item:", item) // Agrega este console.log para verificar el valor de item
                            return (
                                <AttentionCard key={index} data={item} />
                            )
                        })

                    ) : (
                        <div className="flex flex-col items-center justify-center h-full w-full">
                            <h2 className="text-xl font-semibold text-gray-500 text-center">No se encontraron resultados</h2>
                        </div>
                    )
                }


            </div>


        </div>






    )
}

export default Atention