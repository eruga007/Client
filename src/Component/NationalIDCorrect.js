import React, { Component } from 'react';
import {Button} from 'mdbreact'
import { Grid,Col,Row } from 'react-bootstrap';
import { MuiThemeProvider } from 'material-ui/styles';
import './NationalID.css'
import CircleCheck from './CircleCheck.svg';



class NationalIDCorrect extends Component {
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
                        <img src={CircleCheck} width="300" height="300"/>
                        <h2 className="Header-Login">ได้รับการลงทะเบียนแล้ว</h2>
                        </div>                                   
                            <div className="text-center">
                                <Button>ลงทะเบียนผู้ใช้รายใหม่</Button>
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

export default NationalIDCorrect;
