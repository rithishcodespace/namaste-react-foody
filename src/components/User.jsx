import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props); 
    this.state={
        name:"Dummy",
        location:"Default"
    }
  };

  async componentDidMount(){
    const data = await fetch("http://localhost:5000/About/");
    const json = await data.json();
    console.log(json);
    this.setState({
     name:json.name,
     location:json.location
    })
 }

  render() {
    
    return (
      <div>
        <h1>Name: {this.state.name}</h1>
        <h2>Location: {this.state.location}</h2> 
      </div>
    );
  }
}

export default User;
