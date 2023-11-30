import React, { Component } from "react";
import Contacts from "./Contacts";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";

class UserCv extends Component {
  render() {
    return (
      <div>
        <PersonalInfo />
        <Education />
        <Contacts />
        <Experience />
      </div>
    );
  }
}
export default UserCv;
