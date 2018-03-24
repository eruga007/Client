import React, { Component } from 'react';
import './login.css'
import {Input,Button} from 'mdbreact'
import { Grid,Col,Row } from 'react-bootstrap';
class login extends Component {
  render() {
    return (
        <div className="Height">
            <h2 className="Header-Login">ลงชื่อเข้าใช้</h2>
            <Grid>
                <Row className="show-grid"> 
                    <Col xs={6} lg={2}>
                    </Col>
                    <Col xs={6} lg={8}>
                        <form>
                            <Input label="username" icon="user" group type="email" validate error="wrong" success="right"/>
                            <Input label="password"  icon="lock" group type="password" validate/>
                            <div className="text-center">
                                <Button>Login</Button>
                            </div>
                        </form>
                    </Col>
                    <Col xs={6} lg={2}>
           
                    </Col>
                </Row>
            </Grid>
        </div> 
    )
  }
}

export default login;
