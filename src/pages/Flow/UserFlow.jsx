import React from 'react';
import { Container } from 'react-bootstrap';
import UserFlowCard from './UserFlowCard';
import { userFlowData } from '../../data';

const UserFlow = () => (
  <Container>
    <h3>사용자 유입 경로 표시</h3>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <UserFlowCard data={userFlowData} header="유튜브" />
      <UserFlowCard data={userFlowData} header="인스타" />
      <UserFlowCard data={userFlowData} header="지인" />
    </div>
  </Container>
);

export default UserFlow;
