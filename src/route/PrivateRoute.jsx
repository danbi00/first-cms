import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
    BookOutlined,
    CreditCardOutlined,
    HomeOutlined,
    LogoutOutlined,
    NotificationOutlined,
    SettingOutlined,
    SnippetsOutlined,
    TransactionOutlined,
    UserOutlined,
    ArrowRightOutlined,
    LockOutlined,
    BarChartOutlined,
    VideoCameraOutlined,
    ProfileOutlined,  // 추가된 부분
} from '@ant-design/icons';
import { Avatar, Badge, ConfigProvider, Dropdown, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const dropdownItems = [
    {
        key: 'setting',
        label: <Link to="/accounts/setting">설정</Link>,
        icon: <SettingOutlined />,
    },
    {
        key: 'logout',
        label: <Link to="/login">로그아웃</Link>,
        icon: <LogoutOutlined />,
    },
];

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem('Dashboard', 'dashboard', <HomeOutlined />),
    getItem('광고 관리', 'ad', <NotificationOutlined />, [
        getItem('배너', 'ad/banner'),
        getItem('팝업', 'ad/popup')
    ]),
    getItem('결제 관리', 'transactions', <TransactionOutlined />),
    getItem('카드 관리', 'creditcards', <CreditCardOutlined />),
    getItem('공지사항 관리', 'notice', <SnippetsOutlined />),
    getItem('계정 관리', 'accounts', <UserOutlined />, [
        getItem('권한', 'accounts/myprivileges', <LockOutlined />),
        getItem('설정', 'accounts/setting', <SettingOutlined />),
    ]),
    getItem('사용자 유입 관리', 'flow/userflow', <ArrowRightOutlined />),
    getItem('콘텐츠 성과 지표', 'content-performance', <BarChartOutlined />),  // 수정된 부분
    getItem('미디어 관리', 'media-management', <VideoCameraOutlined />),
    getItem('최근 활동 내역', 'recent-activities', <ProfileOutlined />),
];

export default function PrivateRoute() {
    const { pathname } = useLocation();
    const [, main, sub] = pathname.split('/');
    const selected = sub ? [sub, main] : [main];
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    useEffect(() => {
        !selected[0] && navigate('/dashboard');
    }, [navigate, selected]);

    const getCurrentTitle = () => items.find((e) => e.key === main);

    return (
        <ConfigProvider
            theme={{
                components: {
                    Layout: {
                        headerBg: '#fff',
                        bodyBg: 'rgb(242,245,249)',
                        headerHeight: 100,
                    },
                },
            }}
        >
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} theme="light">
                    <div className="demo-logo-vertical" />
                    <div style={{ display: 'flex', gap: 10, padding: '30px 38px' }}>
                        <BookOutlined style={{ fontWeight: 'bold', fontSize: 30, color: '#0575E6' }} />
                        <h1 style={{ fontWeight: 'bold', fontSize: 25, color: '#0575E6' }}>ANTD CMS</h1>
                    </div>
                    <Menu
                        selectedKeys={selected}
                        mode="inline"
                        items={items}
                        onClick={({ key }) => {
                            navigate(`/${key}`);
                        }}
                    />
                </Sider>
                <Layout>
                    <Header
                        style={{
                            padding: '20px 40px',
                            background: colorBgContainer,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <h2 style={{ fontSize: 23, fontWeight: 600 }}>{getCurrentTitle()?.label}</h2>

                        <Dropdown menu={{ items: dropdownItems }} placement="bottom">
                            <Badge count={5}>
                                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                            </Badge>
                        </Dropdown>
                    </Header>
                    <Content style={{ padding: '24px 40px' }}>
                        <Outlet />
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©{new Date().getFullYear()} Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        </ConfigProvider>
    );
}
