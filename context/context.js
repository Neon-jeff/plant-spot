import { createContext, useState } from "react";


const AppContext=createContext({})


 const AppContextProvider=({children})=>{
    const [orders,setOrders]=useState([])
    return (<AppContext.Provider value={{orders,setOrders}}>{children}</AppContext.Provider>)
}

export {AppContext,AppContextProvider}