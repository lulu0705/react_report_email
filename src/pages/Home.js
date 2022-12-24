import { Layout } from "antd";
// import { useState } from "react";
import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
// import products from "../json/products.json";
import MainHome from "../components/MainHome";
import { useNewposts, useProductThree } from '../react-query';
import { useParams } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

function Home(){
    // const [open, setopen] = useState(false);
    const url = "";
    const { data, isLoading } = useNewposts(url);
    const newposts = data?.data || [];
  
    const { datathree, isLoadingthree } = useProductThree(url);
    const topthrees = datathree?.dataa || [];

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
                <MainHome newposts={newposts} topthrees={topthrees}/>
            </Content>
            <Footer className="layout-footer">
                <AppFooter />
            </Footer>
            </Layout>
        </Layout>
    );
}

export default Home;