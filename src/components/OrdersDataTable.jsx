import { formatoMonedaArgentina } from "../utils/FormatoMonedaArgentina";
import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper
} from "@mui/material";
import React, { useEffect, useState } from 'react';
import apiBase from "../api/apiBase";
import { useAuth0 } from '@auth0/auth0-react';
import { dateFormat } from "../utils/DateFormat";
import Loading from "./Loading";
import { mostrarError } from "./Alerts";

const tableHeadStyle = {
    bgcolor: "#33658A",
    boxShadow: 6,
}

const headTextStyle = {
    color: "white",
    boxShadow: 4,
    fontWeight: "600"
}

const rowStyle = {
    "&:hover": {
        backgroundColor: "#2F4858",
        "& .tableCell": {
            color: "white",
        },
    },
    color: "white",
    cursor: "pointer",
    boxShadow: 4,
}

const OrdersDataTable = () => {
    const { getAccessTokenSilently } = useAuth0();
    const [orders, setOrders] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const token = await getAccessTokenSilently();
                const header = {
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                };
                const response = await apiBase.get('/pedidos/cliente', header);

                setOrders(await response.data);
            } catch (e) {
                mostrarError("No se pudieron Recuperar las Pedidos, Refresque la pagina porfavor...")
            }
        })();
    }, [getAccessTokenSilently]);

    if (!orders)
        return <Loading message={"Cargando Pedidos..."} />

    return (
        <TableContainer
            component={Paper}
            sx={{ width: "90%" }}
        >
            <Table >
                <TableHead sx={{ ...tableHeadStyle }} >
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell
                                key={column.title}
                                sx={{ ...headTextStyle }}
                            >
                                {column.title}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody >
                    {zebraColumns(orders)}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default OrdersDataTable;

const zebraColumns = (orders) => {
    return orders.map((row, index) =>
        (index % 2)
            ? (
                <TableRow key={row.id} sx={{ ...rowStyle, backgroundColor: "#DEF4FF" }} >
                    {tableCells(row)}
                </TableRow>
            ) : (
                <TableRow key={row.id} sx={{ ...rowStyle, backgroundColor: "white" }} >
                    {tableCells(row)}
                </TableRow>
            )
    );
}

const tableCells = (row) => {
    const formatedOrderDate = dateFormat(row.created_at);
    return (
        <>
            <TableCell className="tableCell">{formatedOrderDate}</TableCell>
            <TableCell className="tableCell">{row.nombre}</TableCell>
            <TableCell className="tableCell">x{row.cantidad}</TableCell>
            <TableCell className="tableCell">{formatoMonedaArgentina(row.total)}</TableCell>
        </>
    )
}

const columns = [
    {
        title: "Fecha",
        field: "fecha",
    },
    {
        title: "Producto",
        field: "producto_nombre",
    },
    {
        title: "Cantidad",
        field: "cantidad",
    },
    {
        title: "Total",
        total: "total",
    },
];