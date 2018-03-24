import React, { Component } from 'react';
import './RegisterPage.css';
import {Input} from 'mdbreact'
import DropdownPage from './DropdownName'
import DropdownYN from './DropdownYN'
import DropdownFood from './DropdownFood'
import ButtonReg from './ButtonReg'
import ButtonAlcho from './ButtonAlcho'
import {FormGroup,Checkbox,ControlLabel} from 'react-bootstrap'
class RegisterPage extends Component {
  render() {
    return (
      <div className="App">
        
        <div >
        <header className="header">
          <h1 className="register">ลงทะเบียน</h1>
          <p className="register-information">กรุณากรอกข้อมูลให้ถูกต้องและครบถ้วน เพื่อประโยชน์ในการรักษา</p>
        </header>
        </div>
        <div className=" border-bg">
          <div className="border-inner">
          <form>
              <div class="col-sm">
                <Input type="text" label="บัตรประชาชน" className="main-form" />
              </div>
          
            <div>
            
              <div class="container">
                <div class="row">
                  <div class="col-sm">
                      <DropdownPage/>
                  </div>
                  <div class="col-sm">
                    <Input type="text" label="ชื่อ" className="firstname-form"/>
                  </div>
                  <div class="col-sm">
                    <Input type="text" label="นามสกุล" className="lastname-form"/>
                  </div>
                </div>
              </div>
             </div>
             <div class="col-sm">
                <Input type="text" label="เบอร์โทรศัพท์" className="main-form"/>
              </div>
              <div class="col-sm">
                <Input type="text" label="อาชีพ" className="main-form"/>
              </div>
              <div class="container">
                <div class="row">
                  <div class="col-sm">
                    <Input type="text" label="ส่วนสูง" className="height-form"/>
                  </div>
                  <div class="col-sm">
                    <Input type="text" label="น้ำหนัก" className="weight-form"/>
                  </div>
                  <div class="col-sm">
                    <Input type="text" label="BMI" className="BMI-form"/>
                  </div>
                </div>    
            </div>
              <div class="col-sm">
                <Input type="text" label="ยาที่ท่รอยู่ในปัจจุบัน" className="main-form"/>
              </div>
              <div class="col-sm">
                <Input type="text" label="เบอร์โทรศัพท์" className="main-form"/>
              </div>
                <DropdownYN/>
                <DropdownFood/>
                  <FormGroup validationState="success">
                    <ControlLabel>สูบบุหรี่</ControlLabel>{' '}
                    <Checkbox inline>สูบ</Checkbox>{' '}
                    <Checkbox inline>ไม่สูบ</Checkbox>
                  </FormGroup>
                  <ButtonAlcho/>
                  <Checkbox> ToS.</Checkbox>
                  <ButtonReg/>
          </form>
          
        </div>
        </div>
      </div>
    );
  }
}

export default RegisterPage;
