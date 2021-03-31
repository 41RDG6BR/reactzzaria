import React, { Suspense } from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'
import { Drawer as MaterialDrawer } from '@material-ui/core'

const Main = () => (
    <>
    <Drawer variant='permanent'>
        drawer
    </Drawer>
    <Content>
        <Suspense fallback='Loading...'>
            <Switch>

                <Route>
                    <h1>main</h1>
                </Route>
            </Switch>
        </Suspense>        
    </Content>
    </>
)

const Drawer = styled(MaterialDrawer)`
    && {
        .MuiPaper-root {
            width: ${({theme}) => theme.extend.drawerWidth}px;
        }
    }
`
const Content = styled.main`
    margin-left: ${({theme}) => theme.extend.drawerWidth}px;
    padding: ${({ theme }) => theme.spacing(3)}
`

export default Main