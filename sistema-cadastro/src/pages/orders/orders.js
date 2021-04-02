import React, { lazy, Suspense } from 'react'
import styled from 'styled-components'
import { 
    Paper,
    Table,
    TableHead,
    TableRow,
    TableContainer,
    TableCell,
    TableBody,
    Typography
 } from '@material-ui/core'

const Orders = () => {
    return(
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Typography>
                            Informações do pedido
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>    

                <TableBody>
                    <TableRow>
                        <TableCell>
                            <div>
                                <Typography>
                                    Horário do pedido: 4:20h
                                </Typography>
                            </div>
                            <div>
                                <Typography>
                                    Pedido:
                                </Typography>
                                <ul>
                                    <li>
                                        <Typography>
                                            1 pizza media de {' '}
                                            Frango com Catupiry e Calabresa
                                        </Typography>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <Typography>
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
        </TableContainer>
    )
}

export default Orders