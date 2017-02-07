import React from 'react';

class AddGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleGroupsAdd = this.handleGroupsAdd.bind(this);
    }

    handleTextChange(event) {
        this.setState({
            text: event.target.value
        });
    }

    handleGroupsAdd() {
        let newGroup = {
            name: this.state.text
        };

        this.props.onGroupAdd(newGroup);


        this.setState({
            text: ''
        });
    }

    render() {
        return (
            <div>
                <input className="input"
                       type="text"
                       placeholder="Введите название группы"
                       value={ this.state.text }
                       onChange={ this.handleTextChange }/>
                <button className="btn btn-info" onClick={ this.handleGroupsAdd }>Создать</button>
            </div>
        );
    }
}

export default AddGroup;