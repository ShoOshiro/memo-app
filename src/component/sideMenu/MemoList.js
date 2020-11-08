import React from 'react';
import {connect} from 'react-redux';
import {Card} from 'antd';
import MemoRow from './MemoRow';
import {selectMemo} from '../../store/MemoStore';

export class MemoList extends React.Component {

    clickMemo(memo){
        const selectedMemo = Object.assign({}, memo);
        const action = selectMemo(selectedMemo);
        this.props.dispatch(action);
    }

    render(){
        const memos = this.props.mode == 'search' ? this.props.searchedMemo : this.props.memoInfo;
        const memoRows = memos.map((memo) =>{
            if(memo.title == null){return;}
            return (
            <div onClick={this.clickMemo.bind(this, memo)}>
                <Card>
                    <MemoRow title={memo.title}/>
                </Card>
            </div>)
        })

        return(
            <div>
                {memoRows}
            </div>
        );
    }
}

export default connect((state) => state)(MemoList);
