import React from 'react';
import { NavLink } from 'react-router-dom';


const style = { 
    color : 'Blue',
    fontWeight : 'bold'
}

const Nav = () => {
    return (
        <div className='mx-10 mt-6'>
            <nav>
                <ul>
                    <li><NavLink activeStyle={style} exact to='/hooks'>React Hooks</NavLink></li>
                    <li><NavLink activeStyle={style} to='/one'>useState One</NavLink></li>
                    <li><NavLink activeStyle={style} to='/two'>useState Two</NavLink></li>
                    <li><NavLink activeStyle={style} to='/three'>Map Use One</NavLink></li>
                    <li><NavLink activeStyle={style} to='/four'>Map useState</NavLink></li>
                    <li><NavLink activeStyle={style} to='/five'>Filter Delete Map useState</NavLink></li>
                    <li><NavLink activeStyle={style} to='/six'>Spread Operator One</NavLink></li>
                    <li><NavLink activeStyle={style} to='/seven'>Use Effect One</NavLink></li>
                    <li><NavLink activeStyle={style} to='/eight'>Use Effect Clean Up</NavLink></li>
                    <li><NavLink activeStyle={style} to='/nine'>Get Github Users Data using useEffect Hook with Fetch API</NavLink></li>
                    <li><NavLink activeStyle={style} to='/ten'>React ICON Package</NavLink></li>
                    <li><NavLink activeStyle={style} to='/eleven'>useReducer Hook</NavLink></li>
                    <li><NavLink activeStyle={style} to='/twelve'>UseContext One</NavLink></li>
                    <li><NavLink activeStyle={style} to='/thirteen'>UseContext Two</NavLink></li>
                    <li><NavLink activeStyle={style} to='/fourteen'>UseContext Three</NavLink></li>
                    <li><NavLink activeStyle={style} to='/fifteen'>UseHistory One</NavLink></li>
                    <li><NavLink activeStyle={style} to='/sixteen'>UseHistory Two</NavLink></li>
                    <li><NavLink activeStyle={style} to='/seventeen'>React Toastify</NavLink></li>
                    <li><NavLink activeStyle={style} to='/eighteen'>Todo App</NavLink></li>
                    <li><NavLink activeStyle={style} to='/nineteen'>Image Add/Import</NavLink></li>
                    <li><NavLink activeStyle={style} to='/twenty'>Make Api Image Call</NavLink></li>
                </ul>
            </nav>
          <br/>
          <br/>
          <br/>
        </div>
    );
};

export default Nav;