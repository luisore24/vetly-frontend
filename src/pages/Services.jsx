import { NavLink } from "react-router-dom"
import TableServices from "../components/ui/TableServices"
import { use, useEffect, useState } from "react"
import axios from "axios"
import { useAppStore } from "../store/useAppStore"

const Services = () => {

    const { token, hasRole } = useAppStore()

    const [dataServices, setDataServices] = useState(null)

    useEffect(() => {

        const fecthServices = async () => {
            try {
                const response = await axios.get("http://localhost:5400/api/v1/service/", {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                console.log("Services fetched successfully:", response.data)
                setDataServices(response.data)
            } catch (error) {
                console.error("Error fetching services:", error)
            }
        }

        fecthServices()
    }, [])
 

    return (
        <div className="flex flex-col items-center justify-center h-full">

            <div className="flex flex-row justify-around w-full mb-4 my-5">
                <h1 className="text-2xl font-bold mb-4">Listado de Servicios</h1>


                {

                    hasRole(["ADMIN"]) &&
                    <NavLink
                        to="/services/new"
                        className="px-4 py-2 bg-[#48cae4] text-white rounded-md hover:bg-[#0077b6] transition-colors duration-200">
                        <span>+  </span>
                        <span>Nuevo Servicio</span>
                    </NavLink>
                }

            </div>

            <div className="w-xl flex mb-4">
                <input type="text"
                    placeholder="Buscar servicio..."
                    className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" />
            </div>

            <div className="w-3xl my-2">

                <TableServices
                    data={dataServices}
                    headers={["Nombre", "Descripción", "Categoría", "Precio", "Stock"]}
                    role={["ADMIN"]}>

                </TableServices>
                
            </div>

        </div>

    )
}

export default Services