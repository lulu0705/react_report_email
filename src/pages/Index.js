import { Layout } from "antd";
// import { useState } from "react";
import { useParams } from 'react-router-dom';

import AppHeader from "../components/Header";
import GridList from "../components/GridList";
import AppFooter from "../components/Footer";
// import products from "../json/products.json";
import { useProducts } from '../react-query';

const { Header, Content, Footer } = Layout;

function Index(){
  const { categoryName } = useParams();
  const url = categoryName || "";
  const { data, isLoading } = useProducts(url);
  const products = data?.data || [];

  // const [open, setopen] = useState(false);

  return(
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
          <GridList products={products} isLoading={isLoading} />
        </Content>
        <Footer className="layout-footer">
              <AppFooter />
        </Footer>
        </Layout>
      </Layout>
          
    </>
  );
}

export default Index;