import React from 'react'
import Navbar from './components/Navbar';
import {News} from './components/News';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

export default class App extends  React.Component  {
  pageSize= 9;
  apiKey= "0b920fded52f46d7ab810cce9d33dca6"  
  //"733f109d76a44c349ba921b38240ebc1"
  
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path='/' element={<News key="general" pageSize={this.pageSize} country="in" category="general" apiKey={this.apiKey}/>}></Route>
            <Route exact  path='/business' element={<News key="business" pageSize={this.pageSize} country="in" category="business" apiKey={this.apiKey}/>}></Route>
            <Route exact path='/entertainment' element={<News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" apiKey={this.apiKey}/>}></Route>
            <Route exact path='/general' element={<News key="general" pageSize={this.pageSize} country="in" category="general" apiKey={this.apiKey}/>}></Route>
            <Route exact path='/health' element={<News key="health" pageSize={this.pageSize} country="in" category="health" apiKey={this.apiKey}/>}></Route>
            <Route exact path='/science' element={<News key="science" pageSize={this.pageSize} country="in" category="science" apiKey={this.apiKey}/>}></Route>
            <Route exact path='/sports' element={<News key="sports" pageSize={this.pageSize} country="in" category="sports" apiKey={this.apiKey}/>}></Route>
            <Route exact path='/technology' element={<News key="technology" pageSize={this.pageSize} country="in" category="technology" apiKey={this.apiKey}/>}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}
