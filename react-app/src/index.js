import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class MultipleDropDowns extends React.Component {
    render() {
        return (
            <div className='toolbar'>
                <ul-dropdown>
                    <option slot='option' value='1'>One</option>
                    <option slot='option' value='2'>Two</option>
                    <option slot='option' value='3'>Three</option>
                </ul-dropdown>
                <ul-dropdown>
                    <option slot='option' value='4'>Four</option>
                    <option slot='option' value='5'>Five</option>
                    <option slot='option' value='6'>Six</option>
                </ul-dropdown>
            </div>
        );
    }
}

ReactDOM.render(
    <MultipleDropDowns />,
    document.getElementById('root')
  );
