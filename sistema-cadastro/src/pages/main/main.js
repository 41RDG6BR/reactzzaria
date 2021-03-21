import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

const Main = () => (
    <>
        <Suspense fallback='Loading...'>
            <Switch>

                <Route>
                    <h1>main</h1>
                </Route>

                {/* <Route path={routes.HOME} exact children={<ChoosePizzaSize />} 
                    // React.createElement(ChoosePizzaSize, null, children)
                    //Isto é executar um component react quanto se usa JSX
                /> */}
            </Switch>
        </Suspense>
    </>
)

export default Main