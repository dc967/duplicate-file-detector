import { createContext, useContext, useState } from "react";

const AuthContext = createContext()


export function AuthProvider({ children }){
   
    const [user , setUser] = useState(
        JSON.parse(localStorage.getItem('user')) || null
    )

   const [token , setToken] = useState(
     localStorage.getItem('token') || null
   )

   //login function
    const login = (userData, authToken) => {
        setUser(userData)
        setToken(authToken)
        localStorage.setItem('user', JSON.stringify(userData))
        localStorage.setItem('token', authToken)
    }


    //logout function
    const logout = () => {
        setUser(null)
        setToken(null)
        localStorage.removeItem('user')
        localStorage.removeItem('token')
    }

    const value = {
        user,
        token,
        login,
        logout,
        isLoggedIn: !!token,
    }
   
    return (
     <AuthContext.Provider value={value}>
        {children}
     </AuthContext.Provider>
    )
}
export function useAuth() {
        return useContext(AuthContext)
     }