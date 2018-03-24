import React, { Component } from 'react';
import './login.css'
import {Input,Button} from 'mdbreact'
import { Grid,Col,Row } from 'react-bootstrap';
import {Link} from 'react-router-dom'
class NationalID extends Component {
  render() {
    return (
        <div className="Height">
            <h2 className="Header-Login">ตรวจสอบ</h2>
            <p className="Header-Login">กรุณาใส่เลขบัตรประชาชนเพื่อตรวจสอบสิทธิ์</p>
            <Grid>
                <Row className="show-grid"> 
                    <Col xs={6} lg={2}>
                    </Col>
                    <Col xs={6} lg={8}>
                        <form>
                            <Input label="เลขบัตรประชาชน" icon="fa fa-address-card-o" group type="email" validate error="wrong" success="right"/>
                            <div className="text-center">
                                <Button > <Link Link to={"/home/NationalID/NationalIDcorrect"}>ตรวจสอบ</Link></Button>
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

export default NationalID;
