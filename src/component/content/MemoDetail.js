import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Input } from 'antd';
import { Row, Col, Button } from 'antd';
import {addMemo} from '../../store/MemoStore';

export class MemoDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: null,
            category: null,
            detail: null
        }
    }

    doChange(item, e){
        console.log(item);
        switch(item){
            case 'title':
                this.setState({
                    title: e.target.value
                })
                break;
            case 'category':
                this.setState({
                    category: e.target.value
                })
                break;
            case 'detail':
                this.setState({
                    detail: e.target.value
                })
                break;
            default:
        }
    }

    doSave(){
        const action = addMemo(this.state);
        this.props.dispatch(action);
    }

    render(){
        const { TextArea } = Input;
        return(
            <div className='memo-detail'>
                <Row>
                    <Col span={15} offset={1}>
                        <Input onChange={this.doChange.bind(this, 'title')}></Input>
                    </Col>
                    <Col span={6} offset={1}>
                        <Input onChange={this.doChange.bind(this, 'category')}></Input>
                    </Col>
                </Row>
                <Row>
                    <Col span={22} offset={1}>
                        <TextArea rows={4} onChange={this.doChange.bind(this, 'detail')}></TextArea>
                    </Col>
                </Row>
                <Row>
                    <Col offset={1}>
                        <Button type="primary" onClick={() => this.doSave()}>Save Memo</Button>
                    </Col>
                </Row>
            </div>
        );
    };
}

export default connect((state) => state)(MemoDetail);