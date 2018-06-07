import React, { Component } from "react";
import {Container, List, Table, Button} from "semantic-ui-react";



export default props => {
    return(
      <Container textAlign="center" text='true'>
        <div>
          <Table celled basic='very' textAlign="center" columns='2' size='small'>
            <Table.Body>
              <Table.Row>
                <Table.Cell>First Name</Table.Cell>
                <Table.Cell>{props.person.firstName}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Last Name</Table.Cell>
                <Table.Cell>{props.person.lastName}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Username</Table.Cell>
                <Table.Cell>{props.person.username}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Password</Table.Cell>
                <Table.Cell>{props.person.password}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Telephone</Table.Cell>
                <Table.Cell>{props.person.telephone}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Country</Table.Cell>
                <Table.Cell>{props.person.country}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Street Number</Table.Cell>
                <Table.Cell>{props.person.streetNumber}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Flat Number</Table.Cell>
                <Table.Cell>{props.person.flatNumber}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Zip Code</Table.Cell>
                <Table.Cell>{props.person.zipCode}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Street Address</Table.Cell>
                <Table.Cell>{props.person.streetAddress}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Button content="Generate!" primary />
          </div>
        </Container>

    );
}
