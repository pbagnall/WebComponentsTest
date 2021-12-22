import React from 'react';
import './ul-components/DropDown.js';

export default class DropDown extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

    componentDidMount() {
        if (this.props.onChange) {
            this.ref.current.addEventListener('change', e => this.props.onChange(e));
        }
    }

    render() {
        return (
            <ul-dropdown ref={this.ref}>{this.props.children}</ul-dropdown>
        );
    }
}