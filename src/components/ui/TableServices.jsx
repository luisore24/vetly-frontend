import { useAppStore } from "../../store/useAppStore"
import { SquarePen, Trash2 } from "lucide-react"

const TableServices = ( {data, headers, role} ) => {

     const {hasRole} = useAppStore()

    return (

        <table className="table-auto md:table-fixed w-full border border-gray-300 shadow-sm rounded-xl">

            <thead>
                <tr>
                {
                headers?.map((header, index) => (
                        <th className="text-center" key={index}>{header}</th>
                    ))}  
                        {

                        hasRole(role) &&
                        <th>Acciones</th>
                    }

                
                </tr>
            </thead>

            <tbody>

                {data?.map((item, index) => (
                    <tr key={index}>
                        <td className="text-center">{item.name}</td>
                        <td className="text-center">{item.description}</td>
                        <td className="text-center">{item.category.id}</td>
                        <td className="text-center">{item.price}</td>
                        <td className="text-center">{item.estimatedDurationMin}</td>

                         {
                            hasRole(role) && 
                            <td>
                                <button className="px-2 py-1 bg-[#48cae4] text-white rounded-md hover:bg-[#0077b6] transition-colors duration-200 mx-1">
                                    <SquarePen />
                                </button>
                                <button className="px-2 py-1 bg-[#ef476f] text-white rounded-md hover:bg-[#d90429] transition-colors duration-200 mx-1">
                                    <Trash2 />
                                </button>
                            </td>
                        }
                    </tr>
                ))}

            </tbody>

        </table>
    )


}

export default TableServices