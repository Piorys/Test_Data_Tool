import React, {Component} from "react";
import Layout from "../components/layout";
import Block from "../components/block";
import RandomData from "../Data/Random";
import {Button,Segment} from "semantic-ui-react";



class ToolIndex extends Component {
  constructor(props) {
  super(props);
  this.state = {
    data: {}
  };
}

  renderData(){
    const data = new RandomData();
    let person = data.getPerson();
    this.setState({data:person})
  }


  render() {
    return (
      <Layout>
      <Segment>
      <Block person={this.state.data}/>
      <Button content="Generate!" primary onClick={()=>this.renderData()} />
      </Segment>
      </Layout>
    );
  }
}

export default ToolIndex;
