/**
 * Created by student on 1/19/17.
 */
import React, {Component} from 'react';

class Group extends Component {
    render () {
        return (
            <section className="group">
                <span className="btn-delete" onClick={this.props.onDelete}> &#215; </span>
                {this.props.children}
            </section>);
    }
}

class GroupList extends Component{
    render () {
        var deleteGroup = this.props.onGroupDelete;
        return (
            <div className="group-list">
                {
                    this.props.group.map(function (group) {
                        return <Group key = {group.id} onDelete = {deleteGroup.bind(null, group)}>{group.name}</Group>;
                    })
                }
            </div>);
    }
}

class AddGroup extends Component{

    state = {
       text: ''
    };
    handleTextChange = (event) => {
        this.setState({text: event.target.value});
    };
    handleGroupsAdd = () => {
        let newGroup = {
            id: Date.now(),
            name: this.state.text
        };
        this.props.onGroupAdd(newGroup);
        this.setState({text: ''});
    };
    render () {
        return (<div>
            <input className="input"
                   type="text"
                   placeholder="Введите название группы"
                   value={this.state.text}
                   onChange = {this.handleTextChange}/>
            <button className="btn btn-info" onClick = {this.handleGroupsAdd}>Создать</button>
        </div>);
    }
}

class GroupListApp extends Component{
    state = {
            group: []
    };
    componentDidMount() {
        var localGroups = JSON.parse(localStorage.getItem('group'));
        if(localGroups) {
            this.setState({group: localGroups});
        }
    }
    componentDidUpdate() {
        this._updateLocalStorage();
    }
    handleDeleteGroup = (groups) =>{
        var groupId = groups.id;
        var newGroups = this.state.group.filter(function (groups) {
            return groups.id != groupId;
        });
        this.setState({group: newGroups})
    }
    handleGroupAdd = (newGroup) => {
        var newGroups = this.state.group.slice();
        newGroups.unshift(newGroup);
        this.setState({group: newGroups});
    };
    render() {
        return (
            <section className="app-grouplist">
                <h1>Trip Navigator</h1>
                <AddGroup onGroupAdd = {this.handleGroupAdd}/>
                <GroupList group = {this.state.group} onGroupDelete = {this.handleDeleteGroup}/>
            </section>);
    }
    _updateLocalStorage () {
        var group = JSON.stringify(this.state.group);
        localStorage.setItem('group', group)
    }
}
export default GroupListApp;