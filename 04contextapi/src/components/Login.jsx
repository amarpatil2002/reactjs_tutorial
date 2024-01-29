import { useContext, useState } from "react"
import Usercontext from "../Context/Contextapi"

const Login = () => {
    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')
    
    const {setUser} = useContext(Usercontext)

    const getData = (e) => {
        e.preventDefault()
         setUser({username , password})
    }
        return(
        <div>
            <h2>Login Form</h2>
            <input type="text"  onChange={(e) => setUsername(e.target.value) } /><br />
            <input type="text" onChange={(e) => setPassword(e.target.value)} /> <br />
            <button onClick={getData} >Login</button>
        </div>
    )
}

export default Login;