import { HashRouter, Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import { useAppStore } from "../store/useAppStore"
import Products from "../pages/Products"
import Services from "../pages/Services"
import Atention from "../pages/Atention"
import Login from "../pages/Login"
import MainLayout from "../layouts/MainLayout"


const AppRouter = () => {

    const { user } = useAppStore()
    
    console.log("AppRouter - user:", user) // Agrega este console.log para verificar el valor de user
    return (
        <BrowserRouter>
            <main>
                <Routes>
                    <Route
                        path="/"
                        element={ user === null ? <Navigate to="/login"/> : <MainLayout />}>
                        <Route
                            path="/products"
                            element={
                                user === null ?
                                    <Navigate to="/login" />
                                    :
                                    <Products />
                            }
                        />

                        <Route
                            path="/services"
                            element={
                                user === null ?
                                    <Navigate to="/login" />
                                    :
                                    <Services />
                            }
                        />

                        <Route
                            path="/attentions"
                            element={
                                user === null ?
                                    <Navigate to="/login" />
                                    /* :
                                    hasRole(["admin", "editor", "manager", "finance", "RRHH"]) ?
                                        <PanelAdmin />
                                        :
                                        <Unauthorized /> */
                                    :
                                    <Atention />
                            }
                        />

                    </Route>


                        <Route
                            path="/login"
                            element={<Login />}
                        />

                        {/* <Route
                        path="/profile"
                        element={
                            user === null ?
                                <Navigate to="/login" />
                                :
                                <Profile />
                        }
                    /> */}



                        {/* <Route
                        path="/cart"
                        element={
                            user === null ?
                                <Navigate to="/login" />
                                :
                                <Cart />
                        }
                    />

                    <Route
                        path="*"
                        element={<Page404 />}
                    /> */}
                </Routes>
            </main>

        </BrowserRouter>
    )
}

export default AppRouter