import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import News from "./components/News";
import Publications from "./components/Publications";
import SelectedProjects from "./components/SelectedProjects";
import Internship from "./components/Internship";
import Education from "./components/Education";
import SelectedAwards from "./components/SelectedAwards";
import Snapshots from "./components/Snapshots";
import More from "./components/More";
import "./App.css";
import "./css/All.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-layout">
        <div className="left-hero">
          <Hero />
        </div>
        <div className="right-content">
          <div className="content-inner">
            <About />
            <News />
            <Education />
            <Publications />
            <SelectedProjects />
            <Internship />
            <SelectedAwards />
            <Snapshots />
            <More />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
