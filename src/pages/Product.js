import { Layout } from 'antd';
import { useParams } from 'react-router-dom';
// import { useState } from "react";
import GridDetail from "../components/GridDetail";
// import products from "../json/products.json";
import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
import { useProductById } from '../react-query';


const { Header, Content, Footer } = Layout;

function Product({ match }) {
   const { productId } = useParams();

   // const product = products.find(
   //    (x) => x.id === productId
   // );

   const { data, isLoading } = useProductById(productId);
   const product = data || {};

   // const [open, setopen] = useState(false);

   return (
      <>
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
            <GridDetail product = {product} isLoading={isLoading}/>
         </Content>
         <Footer className="layout-footer">
               <AppFooter />
         </Footer>
         </Layout>
        </Layout>
            
      </>
   );
}

export default Product;