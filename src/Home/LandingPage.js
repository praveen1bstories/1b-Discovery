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
                        <a href="https://www.1bstories.com/">
                        <img src={logo}/>
                        </a>
                    </div>
                    <div>
                        <Divider orientation="center">Trending Stories</Divider>
                        <TrendingSlider />
                    </div>
                </div>
            </Content>
        </Layout>
    );
};
export default LandingPage;