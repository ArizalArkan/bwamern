import React, { Component } from "react";
import Heder from "part/Header";
import Hero from "part/Hero";
import MostPick from "part/MostPick";
import Categories from "part/Categories";

// API
import landingPage from "json/landingPage.json";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }
  render() {
    return (
      <>
        <Heder {...this.props}></Heder>
        <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
        <MostPick
          refMostPicked={this.refMostPicked}
          data={landingPage.mostPicked}
        />
        <Categories data={landingPage.categories} />
      </>
    );
  }
}
