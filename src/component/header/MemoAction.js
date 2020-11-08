import React from 'react';
import {connect} from 'react-redux';
import {Button} from 'antd';
import {deleteMemo} from '../../store/MemoStore';

export class MemoAction extends React.Component{

    // TODO: delete memo selected
    onDeleteClick = () => {
        console.log(this.props.selectedMemo);
        const action = deleteMemo(this.props.selectedMemo.index);
        this.props.dispatch(action);
    };

    render(){
        return (
            <div>
                {/* <Button onClick={this.onDeleteClick}>delete memo</Button> */}
            </div>
        );
    }
}

export default connect((state) => state)(MemoAction);
