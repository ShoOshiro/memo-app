import React from 'react';
import {Button} from 'antd';

export class MemoAction extends React.Component{

    // TODO: delete memo selected
    onDeleteClick = () => {console.log('delete clicked')};

    // TODO: display new area of memo
    onAddClick = () => {console.log('add selected')};

    render(){
        return (
            <div>
                <Button onClick={this.onAddClick}>新規追加</Button>
                <Button onClick={this.onDeleteClick}>削除</Button>
            </div>
        );
    }
}

export default MemoAction;