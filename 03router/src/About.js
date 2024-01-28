import { useNavigate } from 'react-router-dom';
import Nav from './Navbar'
const About = () => {

    const navigate = useNavigate()

    return(
        <div>
            <h1>About page</h1>
            <button onClick={() => navigate('/')} >Go Back</button>
        </div>
    )
}

export default About;