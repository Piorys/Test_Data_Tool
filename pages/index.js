import React, {Component} from "react";
import Layout from "../components/layout";
import Block from "../components/block";
import RandomData from "../Data/Random"


class ToolIndex extends Component {
  renderData(){
    const data = new RandomData();
    let person = data.getPerson();
    return <Block person={person}/>
  }


  render() {
    return (
      <Layout>
      {this.renderData()}
      </Layout>
    );
  }
}

export default ToolIndex;
