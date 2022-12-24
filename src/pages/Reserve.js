import { Layout } from "antd";
import { useParams, useSearchParams  } from 'react-router-dom';
// import { useState } from "react";

import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
// import products from "../json/products.json";
import ReserveLayout from "../components/ReserveLayout";
import { useProductById } from '../react-query';


const { Header, Content, Footer } = Layout;

function Reserve({ match }){
    const { productId } = useParams();
    const [searchParams] = useSearchParams();
    const redirect = searchParams.get('redirect');

   // const product = products.find(
   //    (x) => x.id === productId
   // );

   const { data, isLoading } = useProductById(productId);
   const product = data || {};

    // const [open, setopen] = useState(false);

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
                <ReserveLayout product={product} redirect={redirect}/>
                {/* <ReserveLayout product = {product} isLoading={isLoading}/> */}
            </Content>
            <Footer className="layout-footer">
                <AppFooter />
            </Footer>
            </Layout>
        </Layout>
    );
}

export default Reserve;