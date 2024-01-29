import { useContext } from "react"
import Usercontext from "../Context/Contextapi"
const Profile = () => {
    const {user} = useContext(Usercontext)
   
    if(!user) return <h2>Fill the form</h2>
    return <h2>My Username is : {user.username}</h2>
}

export default Profile