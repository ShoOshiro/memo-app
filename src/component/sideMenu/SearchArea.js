import React from 'react';
import {Input} from 'antd';
import {connect} from 'react-redux';
import {searchMemo} from '../../store/MemoStore';

export class SearchArea extends React.Component {

    onSearch(e){
        const action = searchMemo(e.target.value);
        this.props.dispatch(action);
    }

    render(){
        return(
            <div>
                <Input onChange={this.onSearch.bind(this)}/>
            </div>
        )
    }
}

export default connect((state) => state)(SearchArea);