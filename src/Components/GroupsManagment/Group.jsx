import React, { Component } from 'react';

class Group extends Component {
    render() {
        return (
            <section className="group">
                <a className="btn-delete" onClick={ this.props.onDelete }> &#215; </a>
                { this.props.name }
            </section>);
    }
}

export default Group;
