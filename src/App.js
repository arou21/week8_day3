import React, { Component } from 'react'
import Login from './views/Login';
import SignUp from './views/SignUp';
import Home from './views/Home';
import Nav from './components/Nav';
import ToDo from './views/ToDo';
import Profile from './views/Profile';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';



export default class App extends Component {
  constructor() {
    super();
    this.state = {
      test: 0,
      myList: [],
    
      
    }
  }
  addToDo = (e) => {
    e.preventDefault();
    const text=e.target.myText.value
    this.setState({ myList: this.state.myList.concat([text])}) 

  };
  deleteToDo =(indexToDelete) => {
    const copy = [...this.state.myList]
    copy.splice(indexToDelete, 1)
    this.setState({myList: copy})
  };
  handleToDoSubmit = (e) => {
    e.preventDefault();
    const text=e.target.myText.value
    this.state.myList.append()
    this.setState({myList: this.state.myList.concat([text])})
  };

  render() {
    return (
      <BrowserRouter>
      <div>
         <Nav/>
         <Routes> 
           <Route path='/home' element={<Home testVar={this.state.test} x='5000' age ={this.state.age}/>}/>
           <Route path='/signIn' element={<Login/>}/>
           <Route path='/signUp' element={<SignUp/>}/>
           <Route path='/todo' element={<ToDo myList={this.state.myList} handleToDoSubmit={this.addToDo} deleteToDo={this.deleteToDo}/>}/>
           <Route path='/profile' element={<Profile/>}/>
           
       </Routes> 
        

       </div>
      </BrowserRouter> 
      
    )
  }
}
