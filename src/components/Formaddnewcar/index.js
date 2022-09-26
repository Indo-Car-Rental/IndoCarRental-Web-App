import React from "react";
import { Button, Label, Input, FormGroup, Form, FormText } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const Formaddnewcar = () => {

  return (
    <div>
      <div>
        <span>
          <p>breadcrumb</p>
        </span>
      </div>
      <div>
        <p>Add New Car</p>
      </div>
      <div>
        <Form>
            <FormGroup>
              <Label for="exampleEmail">
              Email
              </Label>
              <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="with a placeholder"
                  type="email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">
              Password
              </Label>
              <Input
                  id="examplePassword"
                  name="password"
                  placeholder="password placeholder"
                  type="password"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">
              Select
              </Label>
              <Input
                  id="exampleSelect"
                  name="select"
                  type="select"
                  >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleFile">
              File
              </Label>
              <Input
                  id="exampleFile"
                  name="file"
                  type="file"
                />
                <FormText>
                File size max. 2MB
                </FormText>
            </FormGroup>
            <Button>
            Cancel
            </Button>
            <Button>
            Submit
            </Button>
        </Form>
      </div>
    </div>
    )
}

export default Formaddnewcar;