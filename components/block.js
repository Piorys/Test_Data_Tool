import React, { Component } from "react";
import {Container, List, Table, Button} from "semantic-ui-react";
import RandomData from "../Data/Random"
const data = new RandomData();

class Block extends Component{

  static async generateData() {
    let person = data.getPerson();
    return {
      firstName: person.firstName,
      lastName: person.lastName,
      username: person.username,
      password: person.password,
      telephone: person.telephone,
      country: sperson.country,
      streetName: person.streetName,
      streetNumber: person.streetNumber,
      flatNumber: person.flatNumber,
      zipCode: person.zipCode,
      streetAddress: "todo"
    };
  }

  render(){
    return(
      <Container textAlign="center" text='true'>
        <div>
          <Table celled basic='very' textAlign="center" columns='2' size='small'>
            <Table.Body>
              <Table.Row>
                <Table.Cell>First Name</Table.Cell>
                <Table.Cell>{generateData.firstName}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Last Name</Table.Cell>
                <Table.Cell>{generateData.lastName}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Username</Table.Cell>
                <Table.Cell>generateData.username}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Password</Table.Cell>
                <Table.Cell>{generateData.password}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Telephone</Table.Cell>
                <Table.Cell>{generateData.telephone}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Country</Table.Cell>
                <Table.Cell>{generateData.country}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Street Name</Table.Cell>
                <Table.Cell>{generateData.streetName}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Street Number</Table.Cell>
                <Table.Cell>{generateData.streetNumber}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Flat Number</Table.Cell>
                <Table.Cell>{generateData.flatNumber}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Zip Code</Table.Cell>
                <Table.Cell>{generateData.zipCode}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Street Address</Table.Cell>
                <Table.Cell>{generateData.streetAddress}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Button content="Generate!" primary />
          </div>
        </Container>

    );
  }}

  export default Block;
