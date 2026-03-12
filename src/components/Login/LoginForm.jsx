const LoginForm = ({ handleSubmit, username, setUsername, password, setPassword }) => {
    return (

        <div className="flex justify-center items-center h-screen bg-gray-100">

            <div className="flex flex-col items-center justify-center h-150 w-200 w-auto border border-gray-300 rounded-xl p-8 shadow-lg bg-linear-to-r from-cyan-200 to-blue-300">

                <div className="flex flex-col items-center mb-3">
                    <img src="/assets/login.png" alt="Login" className="w-20 h-20 mb-1" />
                    <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>
                    <h3 className="text-sm text-gray-600 mb-6 text-[#003049]">Bienvenido al sistema Pet-Client</h3>
                </div>

                <form onSubmit={handleSubmit} className="w-80">

                    <div className="flex flex-col justify-center ">

                        <div>
                            <label htmlFor="username" className="block text-sm font-semibold text-gray-700 mb-1 text-[#003049]">Usuario</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                placeholder="Ingresa tu usuario"
                                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-1 mt-4 text-[#003049]">Contraseña</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="Ingresa tu contraseña"
                                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                            />
                        </div>

                    </div>

                    <div>

                    </div>

                    <div>

                        <button
                            onClick={handleSubmit}
                            className="w-full bg-[#48cae4] text-[#184e77] font-semibold py-2 px-4 rounded-md hover:bg-[#0077b6] transition-colors duration-200 mt-10"
                        >
                            Iniciar Sesión
                        </button>

                    </div>

                </form>

            </div>
        </div>

    )
}

export default LoginForm