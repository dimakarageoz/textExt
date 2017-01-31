import React, {Component} from 'react';
import { getData }  from './Api';
import { sendData } from './Api';

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
                    this.props.group.map(function (group, index) {
                        return <Group key={index} onDelete={deleteGroup.bind(null, group)}>{group.name}</Group>;
                    })

                }
            </div>);
    }
}

class AddGroup extends Component{

    state = {
       id: Date.now(),
       text: ''
    };

    handleTextChange = (event) => {
        this.setState({text: event.target.value});
    };
    handleGroupsAdd = () => {
        console.log("Я сработал!");

        let newGroup = {
            id: Date.now(),
            name: this.state.text
        };

        this.props.onGroupAdd(newGroup);

        sendData.sendGroup(newGroup).then((res) => {
            this.setState({
                id: Date.now(),
                name: res
            })
        });

        this.setState({text: ''});
    };

    render () {
        return (<div>
            <input className="input"
                   type="text"
                   placeholder="Введите название группы"
                   value={this.state.text}
                   onChange={this.handleTextChange}/>
            <button className="btn btn-info" onClick={this.handleGroupsAdd}>Создать</button>
        </div>);
    }
}

class GroupListApp extends Component{
    state = {
            id: '',
            group: []
    };

    componentWillMount(){
        getData.getGroups().then((res) => {
            this.setState({
                id: Date.now(),
                group: res
            })
        })

    }

    handleDeleteGroup = (groups) =>{
        var groupId = groups.id;
        var newGroups = this.state.group.filter(function (groups) {
            return groups.id !== groupId;
        });
        this.setState({group: newGroups})
    };
    handleGroupAdd = (newGroup) => {
        var newGroups = this.state.group.slice();
        newGroups.unshift(newGroup);
        this.setState({group: newGroups});
    };
    render() {
        console.log(this.state.group);

        return (
            <section className="app-grouplist">
                <h1>Trip Navigator</h1>
                <AddGroup onGroupAdd={this.handleGroupAdd}/>
                <GroupList group={this.state.group} onGroupDelete={this.handleDeleteGroup}/>
            </section>);
    }
}
export default GroupListApp;