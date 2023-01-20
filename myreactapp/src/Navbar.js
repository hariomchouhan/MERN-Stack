import { Component } from "react";

export class Navbar extends Component{
    render(){
        return(
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Reviews</a></li>
            </ul>
        )
    }
}

// export function Navbar(){
//     return(
//         <>
//         <ul>
//             <li><a href="#">Home</a></li>
//             <li><a href="#">About</a></li>
//             <li><a href="#">Contact</a></li>
//             <li><a href="#">Reviews</a></li>
//         </ul>
//         </>
//     )
// }