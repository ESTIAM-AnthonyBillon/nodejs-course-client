import {NavLink ,Route,Routes} from 'react-router-dom';

import React from 'react';
import Form from './Form';


class Menu extends React.Component{
  contructor(props){}
    render(){
        return(
            <>
            <NavLink to='/forms'>Form</NavLink>
            <Routes>
                <Route exact path='/forms' element={<Form/>}></Route>
            </Routes>
            </>
        )
    }
}

export default Menu;