import React, {Component} from 'react';
import { Input } from 'antd';
import { Row, Col } from 'antd';

export class MemoDetail extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const { TextArea } = Input;
        return(
            <div className='memo-detail'>
                <Row>
                    <Col span={15} offset={1}>
                        <Input></Input>
                    </Col>
                    <Col span={6} offset={1}>
                        <Input></Input>
                    </Col>
                </Row>
                <Row>
                    <Col span={22} offset={1}>
                        <TextArea rows={4}></TextArea>
                    </Col>
                </Row>
            </div>
        );
    };
}

export default MemoDetail;