import React from 'react';
import {connect} from 'react-redux';
import {Button} from 'antd';
import {displayNewInput} from '../../store/MemoStore';

export class MemoAction extends React.Component{

    // TODO: delete memo selected
    onDeleteClick = () => {console.log('delete clicked')};

    // TODO: display new area of memo
    onAddClick = () => {
        const action = displayNewInput()
        this.props.dispatch(action);
    };

    render(){
        return (
            <div>
                <Button onClick={this.onAddClick}>新規追加</Button>
                <Button onClick={this.onDeleteClick}>削除</Button>
            </div>
        );
    }
}

export default connect((state) => state)(MemoAction);
