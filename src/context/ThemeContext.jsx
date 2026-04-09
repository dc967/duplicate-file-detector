import { createContext , useContext, useState, useEffect } from "react";

const ThemeContext = createContext()

export function ThemeProvider({ children }){
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark' ? true : false
  )
useEffect(() => {
   if (darkMode) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
   }else{
     document.documentElement.classList.remove('dark')
     localStorage.setItem('theme', 'light')
   }
}, [darkMode])


 const togglrTheme = () => {
    setDarkMode(!darkMode)
 }
return (
  <ThemeContext.Provider value={{ darkMode, togglrTheme }}>
    {children}
  </ThemeContext.Provider>


)

}

export function useTheme(){
    return useContext(ThemeContext)
}