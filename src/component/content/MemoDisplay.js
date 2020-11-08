import React from 'react';
import {connect} from 'react-redux';
import MemoDetail from './MemoDetail';

export class MemoDisplay extends React.Component {

    render(){
        let displayMemo;
        switch(this.props.mode){
            case 'default':
                displayMemo = <MemoDetail/>
                break;
            case 'select':
                displayMemo = <MemoDetail displayMemo={this.props.selectedMemo}/>
                break;
            case 'search':
                displayMemo = <MemoDetail/>
                break;
        }
        return(
            <div>
                {displayMemo}
            </div>
        )
    }
}

export default connect((state) => state)(MemoDisplay);