const AttentionCard = ({ data }) => {

    console.log(data)
    return (
        <div className="bg-white shadow-md rounded-xl p-4 mb-4 w-80 h-60 mx-4 flex flex-col items-center justify-center ">

            <h2 className="text-xl font-bold mb-2">{data.name}</h2>

            <img 
            src={data.type.description === "SERVICIO" ? "/src/assets/images/service_petclient.jpg" : "/src/assets/images/product_petclient.jpg"} 
            alt={data.name} 
            className="w-32 h-32 object-cover mb-2 rounded-full" />

            <h2 className="text-xl font-bold mb-2">{`Precio: S/ ${data.price.toFixed(2)}`}</h2>
            <p className="text-gray-600 mb-2">{`Categoria: ${data.type.description}`}</p>

        </div>

    )

}

export default AttentionCard