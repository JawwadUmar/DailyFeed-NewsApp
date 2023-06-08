import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default class App extends Component {
  apiKey = '424c84232d994026842cfd6294f39c76'
  // apiKey = process.env.REACT_APP_NEWS_API
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route exact path='/' element={<News key="general" pageSize = {9} apiKey = {this.apiKey} country = "in" category ="general"/>}></Route>
        <Route exact path='/Business' element={<News key="business" pageSize = {9} apiKey = {this.apiKey} country = "in" category ="business"/>}></Route>
        <Route exact path='/Entertainment' element={<News key="entertainment" pageSize = {9} apiKey = {this.apiKey} country = "in" category ="entertainment"/>}></Route>
        <Route exact path='/Health' element={<News key="health" pageSize = {9} apiKey = {this.apiKey} country = "in" category ="health"/>}></Route>
        <Route exact path='/Science' element={<News key="science"  pageSize = {9} apiKey = {this.apiKey} country = "in" category ="science"/>}></Route>
        <Route exact path='/Sports' element={<News key="sports" pageSize = {9} apiKey = {this.apiKey} country = "in" category ="sports"/>}></Route>
        <Route exact path='/Technology' element={<News key="technology" pageSize = {9} apiKey = {this.apiKey} country = "in" category ="technology"/>}></Route>
        {/* <Route exact path='/General' element={<News pageSize = {5} country = "in" category ="general"/>}></Route> */}
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

