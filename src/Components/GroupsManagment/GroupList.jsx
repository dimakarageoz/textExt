import React from 'react';
import Group from './Group';

class GroupList extends React.Component {
    render () {
        const deleteGroup = this.props.onGroupDelete;
        return (
            <div className="group-list">
                {
                    this.props.group.map(function (group, index) {
                        return <Group key={ index }
                                      onDelete={ deleteGroup.bind(null, group) }
                                      name={group.name} />;
                    })
                }
            </div>
        );
    }
}

export default GroupList;