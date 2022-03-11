import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import FilterDelete from "./Components/FilterDelete";
import ImageCall from "./Components/ImageCall";
import ImagesImport from "./Components/ImagesImport";
import MapOne from "./Components/MapOne";
import MapuseState from "./Components/MapuseState";
//------------- page link-----------
import Nav from "./Components/Nav";
import ReactHooks from "./Components/ReactHooks";
import ReactIcon from "./Components/ReactIcon";
import SpreadOperatorOne from "./Components/SpreadOperatorOne";
import Toastify from "./Components/Toastify";
import TodoApp from "./Components/TodoApp";
import UseContextOne from "./Components/UseContextOne";
import UseContextThree from "./Components/UseContextThree";
import UseContextTwo from "./Components/UseContextTwo";
import UseEffectAPI from "./Components/UseEffectAPI";
import UseEffectCleanUp from "./Components/UseEffectCleanUp";
import UseEffectOne from "./Components/UseEffectOne";
import UseHistoryOne from "./Components/UseHistoryOne";
import UseHistoryTwo from "./Components/UseHistoryTwo";
import UseReducerHook from "./Components/UseReducerHook";
import UseStateOne from "./Components/UseStateOne";
import UseStateTwo from "./Components/UseStateTwo";
import NoteState from "./Contex/notes/NoteState";


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Nav/>
          <Switch>
          <NoteState>
            <Route exact path='/hooks'> <ReactHooks/> </Route>
            <Route path='/one'> <UseStateOne/> </Route>
            <Route path='/two'> <UseStateTwo/> </Route>
            <Route path='/three'> <MapOne/> </Route>
            <Route path='/four'> <MapuseState/> </Route>
            <Route path='/five'> <FilterDelete/> </Route>
            <Route path='/six'> <SpreadOperatorOne/> </Route>
            <Route path='/seven'> <UseEffectOne/> </Route>
            <Route path='/eight'> <UseEffectCleanUp/> </Route>
            <Route path='/nine'> <UseEffectAPI/> </Route>
            <Route path='/ten'> <ReactIcon/> </Route>
            <Route path='/eleven'> <UseReducerHook/> </Route>
            <Route path='/twelve'> <UseContextOne/> </Route>
            <Route path='/thirteen'> <UseContextTwo/> </Route>
            <Route path='/fourteen'> <UseContextThree/> </Route>
            <Route path='/fifteen'> <UseHistoryOne/> </Route>
            <Route path='/sixteen'> <UseHistoryTwo/> </Route>
            <Route path='/seventeen'> <Toastify/> </Route>
            <Route path='/eighteen'> <TodoApp/> </Route>
            <Route path='/nineteen'> <ImagesImport/> </Route>
            <Route path='/twenty'> <ImageCall/> </Route>
            </NoteState>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;