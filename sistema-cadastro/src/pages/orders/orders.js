import React from 'react'
import styled from 'styled-components'
import { 
    Paper,
    Table,
    TableHead,
    TableContainer as MaterialTableContainer,
    TableRow,
    TableContainer,
    TableCell,
    TableBody,
    Typography
 } from '@material-ui/core'

 import { useOrders } from '../../hooks'

const Orders = () => {
    const { orders } = useOrders()
    console.log('orders', orders)

    return allOrderStatus.map(orderStatus => (
        <TableContainer key={orderStatus.title}>
            <>
            <TableTitle>
                {orderStatus.title}
            </TableTitle>
            <Table>
                <THead>
                    <TableRow>
                        <Th>
                            <Typography>
                            Informações do pedido
                            </Typography>
                        </Th>
                    </TableRow>
                </THead>    

                <TableBody>
                    <TableRow>
                        <TableCell>
                            <div>
                                <Typography variant='button'>
                                    Horário do pedido: 4:20h
                                </Typography>
                            </div>
                            <div>
                                <Typography>
                                    Pedido:
                                </Typography>
                                <ul>
                                    <li>
                                        <Typography variant='button'>
                                            1 pizza media de {' '}
                                            Frango com Catupiry e Calabresa
                                        </Typography>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <Typography variant='button'>
                                    Endereço do pedido
                                </Typography>

                                <Typography>
                                    Rua Tal, n°, {' '}
                                    ap 10 <br />
                                    Bairro: Boa vista - CEP: 82560440 <br />
                                    Curitiba/PR
                                </Typography>
                            </div>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            </>
        </TableContainer>
    ))}

const allOrderStatus = [
    {
        title: 'Pedidos pendentes'
    },
    {
        title: 'Pedidos em produção'
    },
    {
        title: 'Saiu para entrega'
    },
    {
        title: 'Pedidos finalizados'
    }
]

// const TableContainer = styled(MaterialTableContainer).attrs({
//     component: Paper
// })`
//     && {
//         margin-bottom: ${({ theme }) => theme.spacing(3)}px;
//     }
// `

const TableTitle = styled(Typography).attrs({
    variant: 'h6'
})`
    && {
        padding: ${({ theme }) => theme.spacing(3)}px;
    }
`

const THead = styled(TableHead)`
    && {
        background: ${({ theme }) => theme.palette.common.black}
    }
`

const Th = styled(TableCell)`
    && {
        color: ${({ theme }) => theme.palette.common.white}
    }
`

export default Orders