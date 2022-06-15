import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useAuth0 } from "@auth0/auth0-react";
import { Route } from 'react-router-dom';
import styled from "styled-components";
import OrdersDataTable from "../components/OrdersDataTable";
import Loading from "../components/Loading";

const Container = styled.div``;

const PageContainer = styled.div``;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 15px;
`;

const Title = styled.h1`
  margin: 20px;
`;

const Table = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const OrderList = (props) => {
    const { productosEnCarrito } = props;
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading)
        return <Loading message={"Cargando Mis Pedidos..."} />

    return (
        <Container>
            {isAuthenticated ? (
                <PageContainer>
                    <Navbar
                        productosEnCarrito={productosEnCarrito}
                    />
                    <Announcement />
                    <Top>
                        <Title>Pedidos</Title>
                    </Top>
                    <Table>
                        <OrdersDataTable />
                    </Table>                    
                    <Footer />
                </PageContainer>
            ) : (
                <Route path={window.history.back()} />
            )}
        </Container>
    );
};

export default OrderList;