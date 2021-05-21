import React, { useMemo } from 'react'
import styled from 'styled-components'
import { 
    Fab,
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
 import { singularOrPlural } from '../../utils'

 import { useOrders } from '../../hooks'

const Orders = () => {
    const { orders, status } = useOrders()
    console.log('orders', orders)

    const allOrderStatus = useMemo(()=> {
        return [
            {
                title: 'Pedidos pendentes',
                type: status.pending
            },
            {
                title: 'Pedidos em produção',
                type: status.inProgress
            },
            {
                title: 'Saiu para entrega',
                type: status.outForDelivery
            },
            {
                title: 'Pedidos finalizados',
                type: status.delivered
            }
        ]
    }, [status])

    function getHour (date) {
        const options = {
            hour: 'numeric',
            minute: 'numeric'
        }
        return Intl.DateTimeFormat('pt-BR', options).format(date);
    }

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
                        <Th>
                            <Typography align='center'>
                                Mudar status
                            </Typography>
                        </Th>
                    </TableRow>
                </THead>    

                <TableBody>
                    {orders?.[orderStatus.type].length ===  0 && (
                        <TableRow>
                            <TableCell>
                                <Typography>
                                    Nenhum pedido com esse status
                                </Typography>
                            </TableCell>
                        </TableRow>
                    )}
                    {orders?.[orderStatus.type].map(order => {
                        const {
                            address,
                            number,
                            complement,
                            district,
                            code: cep,
                            city, 
                            state
                        } = order.address

                        return (                            
                            <TableRow key={order.id}>
                                <TableCell>
                                    <div>
                                        <Typography variant='button'>
                                            Horário do pedido: {getHour(order.createdAt.toDate())}
                                        </Typography>
                                    </div>
                                    <div>
                                        <Typography>
                                            Pedido:
                                        </Typography>
                                        <ul>
                                            {order.pizzas.map((pizza, index) => (
                                                <li key={index}>
                                                    <Typography variant='button'>
                                                        {pizza.quantity} {' '}
                                                        {singularOrPlural(pizza.quantity, 
                                                            'pizza', 
                                                            'pizzas'
                                                        )}{' '}
                                                        {pizza.size.name.toUpperCase()} de {' '}
                                                        {pizza.flavours
                                                            .map(flavour => flavour.name.name)
                                                            .reduce((acc, flavour, index, array) => {
                                                                if(index === 0) {
                                                                    return flavour
                                                                }
                                                                if(index === array.length -1) {
                                                                    return `${acc} e ${flavour}`
                                                                }
                                                                return `${acc}, ${flavour}`
                                                        }, '')}
                                                    </Typography>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <Typography variant='button'>
                                            Endereço do pedido
                                        </Typography>

                                        <Typography>
                                            {address}, {number && `${number}`} {' '}
                                            {complement && `, ${complement}`} <br />
                                            Bairro: {district} - CEP: {cep} <br />
                                            {city} / {state}
                                        </Typography>
                                    </div>
                                </TableCell>
                                <TableCell align='center'>
                                    <Fab
                                        color='primary'
                                        title={'Mudar status para <proximo status>'}
                                    />
                                </TableCell>                        
                            </TableRow>
                        )
                    }
                    )}
                </TableBody>
            </Table>
            </>
        </TableContainer>
    ))}

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