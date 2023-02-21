import React, { Component, useState, useEffect } from 'react';

import Nav from './components/Nav';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import ToDo from './views/ToDo';
import SignUp from './views/SignUp';
import Login from './views/Login';
import Home from './views/Home';
import Profile from './views/Profile';



export default function App() {
    // const [test, setTest] = useState(0);
    // const [age, setAge] = useState(9000);
    const [myList, setMyList] = useState([]);
    const [user, setUser] = useState({});

    const logMeIn = (user) => {
        setUser(user)
    };
    const logMeOut = () => {
        setUser({})
    };


    const addToDo = (e) => {
        e.preventDefault();
        const text = e.target.myText.value
        setMyList(myList.concat([text]))
    };
    const deleteToDo = (indexToDelete) => {
        const copy = [...myList]
        copy.splice(indexToDelete, 1)
        // this.setState({ myList: copy }) // class version
        setMyList(copy) // function version
    };

    


    return (
        <Router>
            <div>
                <Nav user={user} logMeOut={logMeOut}/>

                <Routes>
                    {/* <Route path='/' element={<Home testVar={test} x='5000' age={age} happyBirthday={happyBirthday} />} /> */}
                    {/* <Route path='/news' element={<News age={age} />} />
                    <Route path='/feed' element={<Feed />} /> */}
                    <Route path='/signIn' element={<Login logMeIn={logMeIn}/>} />
                    <Route path='/signUp' element={<SignUp/>}/>
                    <Route path='/todo' element={<ToDo myList={myList} handleToDoSubmit={addToDo} deleteToDo={deleteToDo}/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                    {/* <Route path='/test' element={<Test parentAge={age} happyBirthday={happyBirthday} />} /> */}

                    {/* <Route path='/posts/:postId' element={<SinglePost user={user}/>} />
                    <Route path='/posts/update/:postId' element={<UpdatePostClass user={user}/>} />
                    <Route path='/posts/create' element={<CreatePost user={user}/>} /> */}
                </Routes>

            </div>
        </Router>
    )

}