import React from "react";
import "../shared/UI/css/home.css";
import BackGroundImage from "../shared/UI/imgs/student.png";
import Header from "../shared/components/Header";
const HomePage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="home-img-container">
          <img src={BackGroundImage} alt="home pic"></img>
        </div>
        <div className="text">
          <h2 className="home-h2">
            <span className="wel">Welcome</span> to Realtime Lecturing
          </h2>
          <p className="p1">
            Introducing our cutting-edge web page for a revolutionary real-time
            lecturing app! Dive into the future of education with seamless,
            interactive, and dynamic learning experiences. Our thoughtfully
            designed platform facilitates live lectures, fostering a virtual
            classroom environment where educators can engage with students in
            real time.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;