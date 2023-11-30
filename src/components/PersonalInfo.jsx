import React, { Component } from "react";

class PersonelInfo extends Component {
  render() {
    return (
      <div className="container1">
        <img
          src="https://images.unsplash.com/photo-1605951654320-a55377b36744?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFtZXJpY2FuJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D.jpg"
          className="img"
        ></img>
        <div className="flex">
          <h3>GASIMLI NARMIN</h3>
          <p>Age:20</p>
          <p>Living place:Azerbaijan,Baku</p>
        </div>
      </div>
    );
  }
}

export default PersonelInfo;
