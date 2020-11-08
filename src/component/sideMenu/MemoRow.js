import React from 'react';
import { Typography } from 'antd';
const { Text} = Typography;

export class MemoRow extends React.Component{

    render(){
        return(
            <div>
                <Text>{this.props.title}</Text>            
            </div>
        )
    }
}

export default MemoRow;