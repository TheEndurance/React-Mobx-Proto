import React, { Component } from 'react';
import { observer } from "mobx-react";
import GenericView from './GenericView';
const GenericList = observer(class GenericList extends Component {
    render() {
        const store = this.props.store;
        return (
            <div>
                 <ul>
                    {
                        store.data.map((val,idx) => <GenericView data={val} key={val+idx}/>)
                    }
                </ul>
            </div>
        )
    }
}
)

export default GenericList;