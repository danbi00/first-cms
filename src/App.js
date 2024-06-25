import React from 'react';
import PrivateRoute from './route/PrivateRoute';
import Login from './pages/Login';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/transaction/Transactions';
import CreditCards from './pages/creditCard/CreditCards';
import MyPrivileges from './pages/accounts/MyPrivileges';
import Setting from './pages/accounts/Setting';
import CreditCardsDetail from './pages/creditCard/CreditCardsDetail';
import TransactionsDetail from './pages/transaction/TransactionsDetail';
import Banner from './pages/ad/Banner';
import Popup from './pages/ad/Popup';
import BannerDetail from './pages/ad/BannerDetail';
import PopupDetail from './pages/ad/PopupDetail';
import Notice from './pages/Notice';
import NoticeDetail from './pages/NoticeDetail';
import UserFlow from './pages/Flow/UserFlow';
import UserFlowCard from './pages/Flow/UserFlowCard';
import ContentPerformances from './pages/contentPerformance/ContentPerformances';
import MediaManagement from './pages/Media/MediaManagement';
import RecentActivities from './pages/RecentActivities.jsx';  // 추가된 부분
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#0575E6',
                },
            }}
        >
            <Routes>
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="/" element={<PrivateRoute />}>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="ad/banner" element={<Banner />} />
                    <Route path="ad/banner/:id" element={<BannerDetail />} />
                    <Route path="ad/popup" element={<Popup />} />
                    <Route path="ad/popup/:id" element={<PopupDetail />} />
                    <Route path="transactions" element={<Transactions />} />
                    <Route path="transactions/:id" element={<TransactionsDetail />} />
                    <Route path="creditcards" element={<CreditCards />} />
                    <Route path="creditcards/:id" element={<CreditCardsDetail />} />
                    <Route path="notice" element={<Notice />} />
                    <Route path="notice/:id" element={<NoticeDetail />} />
                    <Route path="accounts/myprivileges" element={<MyPrivileges />} />
                    <Route path="accounts/setting" element={<Setting />} />
                    <Route path="flow/userflow" element={<UserFlow />} />
                    <Route path="flow/userflowcard" element={<UserFlowCard />} />
                    <Route path="content-performance" element={<ContentPerformances />} />  {/* 수정된 부분 */}
                    <Route path="media-management" element={<MediaManagement />} /> 
                    <Route path="recent-activities" element={<RecentActivities />} />  {/* 추가된 부분 */}
                </Route>
                <Route path="*" element={<Navigate to="/dashboard" />} />
            </Routes>
        </ConfigProvider>
    );
}

export default App;
