import React, {Component} from 'react';
import { observer } from 'mobx-react';

const GenericView = observer(class GenericView extends Component {
    render(){
        const data = this.props.data;
        return(
            <li>
                <ul>
                    {Object.keys(data).map((key,idx) => <li key={data+idx}>{data[key]}</li>)}
                </ul> 
            </li>
        )
    }
});

export default GenericView;