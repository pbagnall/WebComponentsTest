import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DropDown from "./DropDown.js";

const App = () => {
    const [first, setFirst] = useState("no selection");
    const [second, setSecond] = useState("no selection");

    return (
        <>
        <h1>React App using a WebComponent</h1>
        <div className='layout'>
            <div id='firstOutput'>{first}</div>
            <div id='secondOutput'>{second}</div>
            <DropDown onChange={e => { setFirst(e.detail) } }>
                <option slot='option' value='1'>One</option>
                <option slot='option' value='2'>Two</option>
                <option slot='option' value='3'>Three</option>
            </DropDown>
            <DropDown onChange={e => { setSecond(e.detail) } }>
                <option slot='option' value='4'>Four</option>
                <option slot='option' value='5'>Five</option>
                <option slot='option' value='6'>Six</option>
            </DropDown>
        </div>
        </>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
