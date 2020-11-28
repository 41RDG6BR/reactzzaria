import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
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
import { useAuth, useOrder } from 'hooks'
import FooterCheckout from 'pages/checkout/footer-checkout'
import { HOME } from 'routes'

function CheckoutSuccess () {
    const { userInfo } = useAuth()
    const { order } = useOrder()

    return (
        <>
        <Content>
            <Header>
                <H4>Pronto, {userInfo.user.firstName}</H4>
                <Typography>
                    Seu pedido será entregue no endereço abaixo em até
                </Typography>
                <H6>
                    40 minutos
                </H6>
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
            <Button 
                color='secondary' 
                size='large'
                component={Link}
                to={HOME}
            >
                Voltar para pagina inicial
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

export default CheckoutSuccess