import React from "react";
import {Container, List, Table, Button} from "semantic-ui-react";
export default () => {
  return (
    <Container textAlign="center" text='true'>
    <div>
      <Table celled basic='very' textAlign="center" columns='2' size='small'>
        <Table.Body>
          <Table.Row>
            <Table.Cell>First Name</Table.Cell>
            <Table.Cell>Value</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Last Name</Table.Cell>
            <Table.Cell>Value</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Username</Table.Cell>
            <Table.Cell>Value</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Password</Table.Cell>
            <Table.Cell>Value</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Telephone</Table.Cell>
            <Table.Cell>Value</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Country</Table.Cell>
            <Table.Cell>Value</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Street Name</Table.Cell>
            <Table.Cell>Value</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Street Number</Table.Cell>
            <Table.Cell>Value</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Flat Number</Table.Cell>
            <Table.Cell>Value</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Zip Code</Table.Cell>
            <Table.Cell>Value</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Street Address</Table.Cell>
            <Table.Cell>Value</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Button content="Generate!" primary />
      </div>
    </Container>
  );
};
