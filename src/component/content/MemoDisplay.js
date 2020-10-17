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
            case 'selected':
                displayMemo = <MemoDetail displayMemo={this.props.selectedMemo}/>
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