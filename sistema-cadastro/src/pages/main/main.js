import React, { lazy, Suspense } from 'react'
import styled from 'styled-components'
import { Link, Switch, Route } from 'react-router-dom'
import { 
    Divider,
    Drawer as MaterialDrawer,
    List, 
    ListItem,
    ListItemText,
    Typography
 } from '@material-ui/core'
 import * as routes from '../../routes'

 const Orders = lazy(()=> import('../orders'))
 const PizzasFlavours = lazy(()=> import('../pizzas-flavours'))
 const PizzasSizes = lazy(()=> import('../pizzas-sizes'))

const Main = () => (
    <>
    <Drawer variant='permanent'>
        <DrawerContent>
            <Typography variant='h4'>
                Pizzaria
            </Typography>
 
            <Typography>
                sistema cadastro
            </Typography>
        </DrawerContent>
        
        <Divider />

    <List>
        {menuItems.map(item => (
            <ListItem 
                key ={item.label} 
                button
                component={Link}
                to={item.link}
            >
                <ListItemText>
                    {item.label}
                </ListItemText>
            </ListItem>
        ))}
    </List>

    </Drawer>
    <Content>
        <Suspense fallback='Loading...'>
            <Switch>
                {menuItems.map(item => (            
                    <Route key={item.link} path={item.link} exact={item.exact}>
                        <item.component />
                    </Route>
                ))}
            </Switch>
        </Suspense>        
    </Content>
    </>
)

const menuItems = [
    {
        label: 'Pedidos',
        link: routes.HOME,
        component: Orders,
        exact: true
    },
    {
        label: 'Tamanhos de pizzas',
        link: routes.PIZZAS_SIZES,
        component: PizzasSizes,
    },
    {
        label: 'Sabores de pizzas',
        link: routes.PIZZAS_FLAVOURS,
        component: PizzasFlavours,
    }
]

const Drawer = styled(MaterialDrawer)`
    && {
        .MuiPaper-root {
            width: ${({theme}) => theme.extend.drawerWidth}px;
        }
    }
`
const DrawerContent = styled.div`
    display:flex;
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing(1)}px;
    text-align: center;
`
const Content = styled.main`
    margin-left: ${({theme}) => theme.extend.drawerWidth}px;
    padding: ${({ theme }) => theme.spacing(3)}
`

export default Main