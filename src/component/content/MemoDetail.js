import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Input } from 'antd';
import { Row, Col, Button } from 'antd';
import {addMemo, updateMemo, deleteMemo} from '../../store/MemoStore';

export class MemoDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: null,
            title: null,
            category: null,
            detail: null
        }
    }

    componentDidUpdate(prevProps){
        console.log(this.props.memoInfo);
        if(this.props.mode == 'select'){
            // mode: select になった場合の初期表示
            if(prevProps.selectedMemo == null){
                this.setState({id: this.props.displayMemo.id, title: this.props.displayMemo.title, category: this.props.displayMemo.category, detail: this.props.displayMemo.detail});
            }else if(prevProps.displayMemo.id != this.props.displayMemo.id){
                this.setState({
                    id: this.props.displayMemo.id,
                    title: this.props.displayMemo.title,
                    category: this.props.displayMemo.category,
                    detail: this.props.displayMemo.detail
                })
            }
        }
    }

    doChange(item, e){
        switch(item){
            case 'title':
                this.setState({title: e.target.value});
                break;
            case 'category':
                this.setState({category: e.target.value});
                break;
            case 'detail':
                this.setState({detail: e.target.value});
                break;
            default:
        }
    }

    doSave(){
        let action = null;
        switch(this.props.mode){
            case 'default':
                action = addMemo(this.state);
                break;
            case 'select':
                const updateMemoId = this.props.selectedMemo.id;
                action = updateMemo(this.state, updateMemoId);
                break;
            default:
                break;
        }
        this.props.dispatch(action);
        this.setState({id: '', title: '', category:'', detail:''});
    }

    doDelete = () => {
        const action = deleteMemo(this.props.selectedMemo.id);
        this.props.dispatch(action);
        this.setState({id: '', title: '', category:'', detail:''});
    };

    render(){
        const { TextArea } = Input;
        const {title, category, detail} = this.state;
        return(
            <div className='memo-detail'>
                <Row>
                    <Col span={15} offset={1}>
                        <Input onChange={this.doChange.bind(this, 'title')} value={title} />
                    </Col>
                    <Col span={6} offset={1}>
                        <Input onChange={this.doChange.bind(this, 'category')} value={category} />
                    </Col>
                </Row>
                <Row>
                    <Col span={22} offset={1}>
                        <TextArea rows={4} onChange={this.doChange.bind(this, 'detail')} value={detail}/>
                    </Col>
                </Row>
                <Row>
                    <Col offset={1}>
                        <Button type="primary" onClick={() => this.doSave()}>Save Memo</Button>
                    </Col>
                    <Col offset={1}>
                        <Button type="danger" onClick={() => this.doDelete()}>Delete Memo</Button>
                    </Col>
                </Row>
            </div>
        );
    };
}

export default connect((state) => state)(MemoDetail);
