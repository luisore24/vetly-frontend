import { NavLink, Outlet } from "react-router-dom"
import { useAppStore } from "../store/useAppStore"
import { LogOut, SquareArrowRightExit, Stethoscope, PackageSearch, Syringe } from "lucide-react"



const MainLayout = () => {

    const { user,logout } = useAppStore()
    return (

        <div className="h-screen bg-[#e5e5e5] font-sans font-semibold p-2">


            <header>

                <div className="flex flex-row items-center justify-between mt-5 mx-4">
                    <div className="w-10 h-10 rounded-full bg-gray-80">
                        <img src="src\assets\icons\revision-medica.png" alt="Logo" width={40} height={40} className="rounded-full" />
                    </div>

                    <div className="ml-20 font-semibold">
                        { user ? (
                            <NavLink to="/" className="text-[#255C99] text-2xl">
                            <h2>Pet Clinic</h2>
                        </NavLink>
                        )
                        : (
                            <NavLink to="/login" replace />
                        )
                            
                        }
                        
                    </div>

                    <div className="flex flex-row items-center gap-2">
                        <span>{user ? `${user}` : "Invitado"}</span>
                        <div className="w-10 h-10">
                            <img src="src\assets\icons\profile_user.png" alt="Profile Image" width={40} height={40} className="rounded-full"/>
                        </div>
                       <LogOut onClick={() => {logout()}} className="cursor-pointer" >
                        <SquareArrowRightExit />
                       </LogOut>
                        
                    </div>
                </div>


            </header>


            <nav className="flex justify-center flex-row h-20 bg-[#669bbc] gap-10 rounded-xl items-center mx-10 my-5">

                <div >
                    <NavLink
                        to="/attentions"
                        className={({ isActive }) => `flex flex-col ${isActive ? "text-[#003049] font-extrabold" : "text-white"}`}>
                        <span>Atención</span>
                        <Stethoscope className="self-center" />
                    </NavLink>
                </div>
                <div className="flex flex-col">
                    <NavLink
                        to="/products"
                        className={({ isActive }) => `flex flex-col ${isActive ? "text-[#003049] font-extrabold" : "text-white"}`}>
                        <span>Productos</span>
                        <PackageSearch className="self-center" />
                    </NavLink>
                </div>
                <div className="flex flex-col justify-center">
                    <NavLink
                        to="/services"
                        className={({ isActive }) => `flex flex-col ${isActive ? "text-[#003049] font-extrabold" : "text-white"}`}>
                        <span>Servicios</span>
                        <Syringe className="self-center" />
                    </NavLink>
                </div>

            </nav>

            <main>
                <Outlet />
            </main>

        </div>
    )
}

export default MainLayout