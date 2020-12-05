import React, { Component } from "react";
import Heder from "part/Header";
import Hero from "part/Hero";
import landingPage from "json/landingPage.json";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Heder {...this.props}></Heder>
        <Hero data={landingPage.hero} />
      </>
    );
  }
}
