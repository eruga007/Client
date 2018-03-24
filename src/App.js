import React, { Component } from 'react';
import {Route,BrowserRouter} from 'react-router-dom'
import login from './Component/login'
import HomeMenu from './Component/HomeMenu'
import RegisterPage from './Component/RegisterPage'
import NationalID from './Component/NationalID';
import NationalIDcorrect from './Component/NationalIDCorrect'
class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <Route  path='/' exact component={login}/>
                <Route path='/Home' component={HomeMenu}/>
                <Route path='/Home/Register'  exact component={RegisterPage}/>
                <Route path='/Home/NationalID' exact component={NationalID}/>
                <Route path='/Home/NationalID/NationalIDcorrect' exact component={NationalIDcorrect}/>
                <Route path='/Home/Register/NationalIDcorrect' exact component={NationalIDcorrect}/>
            </div>
        </BrowserRouter>

    );
  }
}

export default App;
