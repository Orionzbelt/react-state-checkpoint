import React from "react";
import "react-responsive-modal/styles.css";
import "./App.css";

import { Modal } from "react-responsive-modal";
// import ProfilPhoto from "./image/profilPhoto.jpg";
import Profil from "./Components/Profile/Profil";

class App extends React.Component {
  state = {
    Person: {
      fullName: "Abasifreke Ikpembe",
      bio:
        "“I am a Full Stack Developer with experience in developing web applications. I have a strong background in both front-end and back-end development and proficient in JavaScript for client side, server side and database programming. After completing my degree from University of Calabar, I registered at GOMYCODE Nigeria, for the Fullstack Js development bootcamp. During my time there, I worked on several projects and gained expertise in Agile development methodologies. I am passionate about creating scalable, user-friendly web applications that deliver exceptional user experiences. I have experience working with various front-end frameworks such as React and Angular, and I am equally comfortable working with back-end frameworks such as Node.js, Express and APIs. In my free time, I enjoy contributing to open-source projects and mentoring aspiring developers. I am an enthusiaitic traveller who loves to experience other cultures and cuisines",
        
      profession: "Fullstack js",
    },
    show: false,
    date: new Date(),
  };
  componentDidMount() {
    this.timer = setInterval(() => this.refrechDate(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  refrechDate() {
    this.setState({
      date: new Date(),
    });
  }
  onOpenModal = () => {
    this.setState({ show: true });
  };
  onCloseModal = () => {
    this.setState({ show: false });
  };
  render() {
    const { show, date } = this.state;
    return (
      <React.Fragment>
        <div className="date-container">
          <h2>It's : {date.toLocaleTimeString()}</h2>
        </div>
        <div className="App">
          <h1 style={{ color: "#3fb0ac" }}>Welcome to my website</h1>
          <p>press the button to show the profile </p>
          <div>
            <i className="fas fa-level-down-alt"></i>
          </div>

          <button className="btn" onClick={this.onOpenModal}>
            Show Profile
          </button>
          <Modal open={show} onClose={this.onCloseModal} center>
            <Profil persone={this.state.Person} />
          </Modal>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
