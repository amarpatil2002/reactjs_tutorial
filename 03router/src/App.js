import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Routes ,Route} from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Error from './Error'
import Mainheader from './Mainheader'

function App() {
  return (
      <BrowserRouter>
      <Routes>
      <Route path="/" element={< Mainheader/>}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error/>} />
      </Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;


// <div className="App">
// <h3>This Routing tutorial</h3>
// <BrowserRouter>
// <Routes>
//   <Route path="/" element={<div>Home page</div>} />
//   <Route path="/about" element={<div>about page</div>} />
//   <Route path="/contact" element={<div>contact page</div>} />
// </Routes>
// </BrowserRouter>
// </div>