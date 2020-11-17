import React from "react";

export default class DogCard extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      active: ""
    }
  }
  displayBark = () => {
    if (this.state.active === ""){
      console.log("active")
      this.setState({active:"Bark!"})
      
    }else{
      console.log("inactive")
      this.setState({active:""})
    }
  }
  
  render(){
    return (
      <div className="card">
        <span className="content">
          <h2 >{this.props.name}</h2>
          <img alt="dog" src={this.props.img} />
        </span>
        <span className="bark">
          <button onClick={ this.displayBark }>Bark</button>
        </span>
    <h2 className="bark-display">{this.state.active}</h2>
      </div>
    );
  }
}

// function DogCard(props) {
//   let h2 = <h2>Bark!</h2>
//   let innerText = "Bark!"

//   let displayBark = () => {
//     if (props.active == "inactive"){
//       console.log("active")
//       innerText = "Bark!"
      
//     }else{
//       console.log("inactive")
//       innerText = ""
//       clicked = !clicked
//     }
//   }
  
//   return (
//     <div className="card">
//       <span className="content">
//         <h2 >{props.name}</h2>
//         <img alt="dog" src={props.img} />
//       </span>
//       <span className="bark">
//         <button onClick={ displayBark }>Bark</button>
//       </span>
//       <h2 className="bark-display"></h2>
//     </div>
//   );
// }

// export default DogCard;
