import React, { Component } from "react";
import { apiResponse } from "../api"
import DogCard from "../Components/DogCard"

class DogsList extends Component {

  renderDogCard = () => {
    return apiResponse.map(dog => <DogCard name= {dog.name} img = {dog.img}/>)
  }


  render() {
  return <div className="list">{this.renderDogCard()}</div>;
  }
}

export default DogsList;
