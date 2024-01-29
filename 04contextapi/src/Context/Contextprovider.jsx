import { useState , Provider} from "react";
import Usercontext from "./Contextapi";

const Contextprovider = ({children}) => {

    const [user , setUser] = useState()

    return(
        <Usercontext.Provider value={{user,setUser}}>
        {children}
        </Usercontext.Provider>
    )

}

export default Contextprovider