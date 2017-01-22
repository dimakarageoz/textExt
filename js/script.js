/**
 * Created by Аля on 11.01.2017.
 */

var Group = React.createClass({
    render: function () {
        return (
            <section className="group">
                <span className="btn-delete" onClick={this.props.onDelete}> &#215; </span>
                {this.props.children}
            </section>);
    }
});
var GroupList = React.createClass({
    render: function () {
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
});

var AddGroup = React.createClass({
    getInitialState: function () {
            return {
                text: ''
            };
    },
    handleTextChange: function (event) {
        this.setState({text: event.target.value});
    },
    handleGroupsAdd: function () {
      var newGroup = {
          id: Date.now(),
          name: this.state.text
      };
       this.props.onGroupAdd(newGroup);
        this.setState({text: ''});
    },
    render: function () {
        return (<div>
                <input className="input"
                    type="text"
                    placeholder="Введите название группы"
                    value={this.state.text}
                    onChange = {this.handleTextChange}/>
                <button className="btn btn-info" onClick = {this.handleGroupsAdd}>Добавить</button>
            </div>);
    }
});
var GroupListApp = React.createClass({
    getInitialState: function () {
        return {
            group: []
        };
    },
    componentDidMount: function () {
        var localGroups = JSON.parse(localStorage.getItem('group'));
        if(localGroups) {
            this.setState({group: localGroups});
        }
    },
    componentDidUpdate: function () {
        this._updateLocalStorage();
    },
    handleDeleteGroup: function (groups) {
        var groupId = groups.id;
        var newGroups = this.state.group.filter(function (groups) {
           return groups.id != groupId;
        });
        this.setState({group: newGroups})
    },
    handleGroupAdd: function (newGroup) {
        var newGroups = this.state.group.slice();
        newGroups.unshift(newGroup);
        this.setState({group: newGroups});
    },
    render: function () {
        return (
            <section className="app-grouplist">
                <h1>Welcome to GroupListApp!</h1>
                <AddGroup onGroupAdd = {this.handleGroupAdd}/>
                <GroupList group = {this.state.group} onGroupDelete = {this.handleDeleteGroup}/>
            </section>);
    },
    _updateLocalStorage: function () {
        var group = JSON.stringify(this.state.group);
        localStorage.setItem('group', group)
    }
});

ReactDOM.render(
    <GroupListApp/>,
    document.getElementById("content")
);