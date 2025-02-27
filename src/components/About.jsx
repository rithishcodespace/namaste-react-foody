import User from "./User.jsx"
import React from "react";
class About extends React.Component{
  constructor(props){
    super(props)
    
  }
  
  render()
  {
    return(
      <div>
        <h1>About Page</h1>
        <p>This is the About Page.</p>
        <User/>
      </div>
    )
  }

} 

// const About = () => {
//     return (
//       <div>
//         <h1>About Page</h1>
//         <p>This is the About Page.</p>
//         <User name={Rithish} location={sathyamangalam}/>
//       </div>
//     );
//   };
  
export default About;
  