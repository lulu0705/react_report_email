import { Layout } from "antd";
// import { useState } from "react";
import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
// import products from "../json/products.json";
import FeedbackLayout from "../components/FeedbackLayout";
import { useParams, useSearchParams  } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

function Feedback(){
    // const [open, setopen] = useState(false);
    const [searchParams] = useSearchParams();
    const redirect = searchParams.get('redirect');
    return(
        <Layout className="main-layout">
        {/* <NavBar open = {open} /> container*/}
        <Layout>
        {/* <HamMenu
          onClick={() => setopen(!open)}
          open={open}
        /> */}
            <Header className="layout-header">
                <AppHeader />
            </Header> 
            <Content className="layout-content">
                {/* <ProductList products={products}/> */}
                <FeedbackLayout redirect={redirect}/>
            </Content>
            <Footer className="layout-footer">
                <AppFooter />
            </Footer>
            </Layout>
        </Layout>
    );
}

export default Feedback;