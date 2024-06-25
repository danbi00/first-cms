import React from 'react';
import { ListGroup, Table, Col, Row, Tab, Image } from 'react-bootstrap';

const data = [
    {
        eventKey: '#link1',
        name: '사용자 1',
        age: 28,
        address: '경기도 남양주시',
        email: 'song woo jin',
        profileImg: 'https://i.namu.wiki/i/xS-YWi0AVH8_nhsPxWEwL_7MNATRLCG3FteN0qydzhWANDXEkqvX_ZdgvwTGmjNKexdI05ufRZ5BipETRMMWLw.webp', 
    },
    {
        eventKey: '#link2',
        name: '사용자 2',
        age: 34,
        address: '서울시 종로구',
        email: 'byeon woo seok',
        profileImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8eaXqEQ44gGDSSa0GUvIPYGY5-JDmdtHVPw&s', 
    },
];

const RecentActivities = () => (
    <div style={{ margin: 40 }}>
        <h3>최근 활동 내역</h3>
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row>
                <Col sm={4}>
                    <ListGroup>
                        {data.map((item, index) => (
                            <ListGroup.Item action href={item.eventKey} key={index}>
                                {item.name}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
                <Col sm={8}>
                    <Tab.Content>
                        {data.map((item, index) => (
                            <Tab.Pane eventKey={item.eventKey} key={index}>
                                <Table striped bordered hover>
                                    <tbody>
                                        <tr>
                                            <td>이름</td>
                                            <td>{item.name}</td>
                                        </tr>
                                        <tr>
                                            <td>나이</td>
                                            <td>{item.age}</td>
                                        </tr>
                                        <tr>
                                            <td>주소</td>
                                            <td>{item.address}</td>
                                        </tr>
                                        <tr>
                                            <td>이메일</td>
                                            <td>{item.email}</td>
                                        </tr>
                                        <tr>
                                            <td>프로필 이미지</td>
                                            <td>
                                                <Image src={item.profileImg} style={{ width: '100px', height: '100px' }} />
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Tab.Pane>
                        ))}
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    </div>
);

export default RecentActivities;
