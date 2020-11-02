import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { CHECKOUT_SUCCESS } from 'routes'

import {
    Button,
    Container,
    Divider as MaterialDivider,
    Paper, 
    Typography 
} from '@material-ui/core'
import {
    Content,
    H4,
    H6,
    OrderInfo
} from 'ui'
import { useAuth } from 'hooks'
import FooterCheckout from 'pages/checkout/footer-checkout'

function CheckoutConfirmation () {
    const { userInfo } = useAuth()

    return (
        <>
        <Content>
            <Header>
                <H4>Oi {userInfo.user.firstName}</H4>
                <Typography>
                    Confere se está tudo certo com o seu pedido antes de finalizar
                </Typography>
            </Header>
            <Container maxWidth='sm'>
                <PaperContainer>
                    <H6> Seu pedido: </H6>
                        <OrderInfo />
                        
                        <Divider />

                    <H6> Endereço para entrega: </H6>
                    
                    <Typography> 
                        Rua, cep ... 
                    </Typography>

                        <Divider />

                    <H6> Telefone </H6>
                    <Typography> 
                       (41)33333333
                    </Typography>

                </PaperContainer>
            </Container>
        </Content>
        <FooterCheckout justifyContent='center'>
            <Button variant='contained' color='primary' size='large'
             component={Link}
             to={CHECKOUT_SUCCESS}>
                Tudo certo
            </Button>
        </FooterCheckout>
        </>
    )
}

const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: ${({ theme }) => theme.spacing(3)}px;
    text-align: center;
`

const PaperContainer = styled(Paper)`
&& {
    padding: ${({ theme })=> theme.spacing(3)}px;
}
`

const Divider = styled(MaterialDivider)`
    && {
        margin : ${({ theme }) => theme.spacing(3, 0)};
    }
`

export default CheckoutConfirmation