import React, { useState } from "react";
import { Button, Container, Row, Col, Popover, PopoverHeader, PopoverBody } from "reactstrap";

const TestBootstrap = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <Container>
      <Row>
        <Col>.col</Col>
      </Row>
      <Row>
        <Col>.col</Col>
        <Col>.col</Col>
        <Col>.col</Col>
        <Col>.col</Col>
      </Row>
      <Row>
        <Col xs="3">.col-3</Col>
        <Col xs="auto">.col-auto - variable width content</Col>
        <Col xs="3">.col-3</Col>
      </Row>
      <Row>
        <Col xs="6">.col-6</Col>
        <Col xs="6">.col-6</Col>
      </Row>
      <Row>
        <Col xs="6" sm="4">
          .col-6 .col-sm-4
        </Col>
        <Col xs="6" sm="4">
          .col-6 .col-sm-4
        </Col>
        <Col sm="4">.col-sm-4</Col>
      </Row>
      <Row>
        <Col sm={{ size: 6, order: 2, offset: 1 }}>.col-sm-6 .order-sm-2 .offset-sm-1</Col>
      </Row>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          .col-sm-12 .col-md-6 .offset-md-3
        </Col>
      </Row>
      <Row>
        <Col sm={{ size: "auto", offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
        <Col sm={{ size: "auto", offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
      </Row>
      <Row>
        <Col sm="12">
          <Button color="primary">primary</Button>
          <Button color="secondary">secondary</Button>
          <Button color="success">success</Button>
          <Button color="info">info</Button>
          <Button color="warning">warning</Button>
          <Button color="danger">danger</Button>
          <Button color="link">link</Button>
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <Button id="Popover1" type="button">
            Launch Popover
          </Button>
          <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
            <PopoverHeader>Popover Title</PopoverHeader>
            <PopoverBody>
              Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
              venenatis vestibulum.
            </PopoverBody>
          </Popover>
        </Col>
      </Row>
    </Container>
  );
};

export default TestBootstrap;
