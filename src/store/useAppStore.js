import axios from "axios";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { jwtDecode } from "jwt-decode";


export const useAppStore = create(
    persist(
        (set, get) => ({
            user: null,
            token: null,
            role: null,
            isAuthenticated: false,

            login: async (username, password) => {
                try {
                    const response = await axios.post("http://localhost:5400/api/v1/auth/login", {
                        username,
                        password
                    })

                    console.log("Login successful:", response.data)

                    const decodedToken = jwtDecode(response.data.token)
                    console.log("Decoded token:", decodedToken)

                    const roles = decodedToken.authorities.filter(auth => auth.startsWith("ROLE_"))

                    set({
                        user: response.data.username,
                        token: response.data.token,
                        role: roles,
                        isAuthenticated: true
                    })

                } catch (error) {
                    console.error("Login failed:", error)
                }
                finally {
                    console.log("Login attempt finished")
                }

            },
            logout: () => {
                set({
                    user: null,
                    token: null,
                    role: null,
                    isAuthenticated: false
                })
            },
            hasRole: (roles) => {
                const currentRoles = get().role
                console.log("CurrentRoles: ", currentRoles) // Agrega este console.log para verificar el valor de currentRoles
                if (currentRoles === null) {
                    return false
                } 
                
                const userRoles = Array.isArray(currentRoles) ? currentRoles : [currentRoles]
                const rolesToCheck = Array.isArray(roles) ? roles : [roles]

                return rolesToCheck.some(role => 
                    userRoles.some(userRole => userRole === role || userRole === `ROLE_${role}`)
                )
            }

        }),
        {
            name: "info-profile",
            storage: createJSONStorage(() => sessionStorage)
        }


    )
)