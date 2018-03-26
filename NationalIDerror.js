import React, { Component } from 'react';
import {Button} from 'mdbreact'
import { Grid,Col,Row } from 'react-bootstrap';
import { MuiThemeProvider } from 'material-ui/styles';
import './NationalID.css'
import CircleError from './CircleError.svg';
import {Link} from 'react-router-dom'



class NationalIDerror extends Component {
  render() {
    return (
        <div className="Height">
            <MuiThemeProvider>
            <Grid>
                <Row className="show-grid"> 
                    <Col xs={6} lg={2}>
                    </Col>
                    <Col xs={6} lg={8}>
                        <div className="mid">
                        <img src={CircleError} width="300" height="300"/>
                        <h2 className="Header-Login">ไม่พบข้อมูลผู้ใช้งาน</h2>
                        </div>                                   
                            <div className="text-center">
                                <Button><Link to={"/home"}>กลับสู่เมนูหลัก</Link></Button>
                            </div>
                    </Col>
                    <Col xs={6} lg={2}>          
                    </Col>
                </Row>
            </Grid>
            </MuiThemeProvider>
        </div> 
    )
  }
}

export default NationalIDerror;
