import {Layout, Input, Divider} from 'antd';
import TrendingSlider from "./slider/TrendingSlider";
import logo from '../images/logo192.png'



const { Content, Footer } = Layout;
const {Search} = Input


const LandingPage = () => {
    return (
        <Layout className="layout">
            <Content
                style={{
                    height:"100%"
                }}
            >
                <div className="main-page">
                    <div className="name-logo">
                        <img src={logo}/>
                        <div className="header">1b Discovery</div>
                    </div>
                    <div className="search">
                        <Search size="large" placeholder={"Search Stories"}/>
                    </div>
                    <div>
                        <Divider orientation="left">Trending Stories</Divider>
                        <TrendingSlider />
                    </div>
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                1bstories discover ©2023 Created by 1bstories
            </Footer>
        </Layout>
    );
};
export default LandingPage;