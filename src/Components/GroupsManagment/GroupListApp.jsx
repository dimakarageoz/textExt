import React from 'react';
import { getData, deleteData } from './Api';
import { sendData } from './Api';
import GroupList from './GroupList';
import AddGroup from './AddGroup';

class GroupListApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            groups: []
        };

        this.handleDeleteGroup = this.handleDeleteGroup.bind(this);
        this.handleGroupAdd = this.handleGroupAdd.bind(this);
    }

    componentWillMount() {
        getData.getGroups().then((res) => {
            this.setState({
                groups: res
            });
        })
    }

    handleDeleteGroup(groups) {
        const groupId = groups._id;
        const newGroups = this.state.groups.filter(function (groups) {
            return groups._id !== groupId;
        });
        deleteData.delGroup(groupId).then((res) => {
            this.setState({
                groups: newGroups
            })
        });
    }

    handleGroupAdd(group) {
        sendData.sendGroup(group).then((newGroup) => {
            this.setState((prevState) => {
                return {
                    groups: [...prevState.groups, newGroup]
                };
            });
        });
    }

    render() {
        return(
            <section className="app-grouplist" >
                <h1>Trip Navigator</h1>
                <AddGroup onGroupAdd={ this.handleGroupAdd } />
                <GroupList group={ this.state.groups } onGroupDelete={ this.handleDeleteGroup } />
            </section>
        );
    }
}

export default GroupListApp;