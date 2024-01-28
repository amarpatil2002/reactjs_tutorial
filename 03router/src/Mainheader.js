import { Outlet } from "react-router-dom";
import Navbar from './Navbar'

const Mainheader = () => {
    return(
        <div>
        <Navbar />
        <Outlet />
    </div>
    )
}

export default Mainheader;