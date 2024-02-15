import { Component } from "react";

// Mounting Phase

// export default class extends Component{
   
//     constructor(){
//         console.log("inside constructor method...");

//         super()
//         this.state = {
//             count:0
//         }
//     }

//     static getDerivedStateFromProps(props , state){

//         console.log("inside getDerivedStateFromProps method...");
//         return null;
//     }

//     componentDidMount(){
//         console.log("inside componentDidMount method...");

//     }

//     render(){
//         console.log("inside render method...");
//         return(
//             <div>
//                 <h2>Life Cycle Methods in React JS</h2>
//                 <h3>Count is {this.state.count}</h3>
//                 <button onClick={() => this.setState({count:this.state.count + 1}) } >Click Me</button>
//             </div>
//         )
//     }
// }


// Updating Phase

// export default class extends Component{
   
//     constructor(){
//         console.log("inside constructor method...");

//         super()
//         this.state = {
//             count:0
//         }
//     }

//     static getDerivedStateFromProps(props , state){

//         console.log("inside getDerivedStateFromProps method...");
//         return null;
//     }

//      shouldComponentUpdate(nextProps , nextstate){
//         console.log("inside shouldComponentUpdate method...");

//         return true;
//      }

//      getSnapshotBeforeUpdate(prevProps , prevState){
//         console.log("inside getSnapshotBeforeUpdate method...");
//         return null;
//      }

//      componentDidUpdate(prevProps , prevState ,snapShot){
//         console.log("inside componentDidUpdate method...");

//      }

//     render(){
//         console.log("inside render method...");
//         return(
//             <div>
//                 <h2>Life Cycle Methods in React JS</h2>
//                 <h3>Count is {this.state.count}</h3>
//                 <button onClick={() => this.setState({count:this.state.count + 1}) } >Click Me</button>
//             </div>
//         )
//     }
// }

// Unmounting Phase

export default class extends Component{
   
    constructor(){
        console.log("inside constructor method...");

        super()
        this.state = {
            count:0
        }
    }

    componentWillUnmount(){
        
    }

    render(){
        console.log("inside render method...");
        return(
            <div>
                <h2>Life Cycle Methods in React JS</h2>
                <h3>Count is {this.state.count}</h3>
                <button onClick={() => this.setState({count:this.state.count + 1}) } >Click Me</button>
            </div>
        )
    }
}