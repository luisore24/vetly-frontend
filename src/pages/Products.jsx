import { NavLink } from "react-router-dom"
import TableProducts from "../components/ui/TableProducts"
import { use, useEffect, useState } from "react"
import axios from "axios"
import { useAppStore } from "../store/useAppStore"

const Products = () => {

    const { token, hasRole } = useAppStore()

    const [dataProducts, setDataProducts] = useState(null)

    useEffect(() => {
        const fecthProducts = async () => {
            try {
                const response = await axios.get("http://localhost:5400/api/v1/product/", {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                console.log("Products fetched successfully:", response.data)
                setDataProducts(response.data)
            } catch (error) {
                console.error("Error fetching products:", error)
            }
        }

        fecthProducts()
    }, [])

    return (
        <div className="flex flex-col items-center justify-center h-full">

            <div className="flex flex-row justify-around w-full mb-4 my-5">
                <h1 className="text-2xl font-bold mb-4">Listado de Productos</h1>


                {

                    hasRole(["ADMIN"]) &&
                    <NavLink
                        to="/products/new"
                        className="px-4 py-2 bg-[#48cae4] text-white rounded-md hover:bg-[#0077b6] transition-colors duration-200">
                        <span>+  </span>
                        <span>Nuevo Producto</span>
                    </NavLink>
                }

            </div>

            <div className="w-xl flex mb-4">
                <input type="text"
                    placeholder="Buscar producto..."
                    className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" />
            </div>

            <div className="w-3xl my-2">

                <TableProducts
                    data={dataProducts}
                    headers={["Nombre", "Descripción", "Categoría", "Precio", "Stock"]}
                    role={["ADMIN"]}>

                </TableProducts>
                
            </div>

        </div>

    )
}

export default Products