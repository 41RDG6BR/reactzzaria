import React, { useCallback } from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'
import {
    Button,
    Typography,
    Grid
} from '@material-ui/core'
import { TextField } from '../../ui'
import { PIZZAS_SIZES } from '../../routes'
import { useCollection } from '../../hooks'

function FormRegiterSize () {
    const { add } = useCollection('pizzasSizes')
    const history = useHistory()

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault()
        const { name, size, slices, flavours } = e.target.elements
        
        const normalizeData = {
            name: name.value,
            slices: +slices.value,
            size: +size.value,
            flavours: +flavours.value
        }
        await add(normalizeData)
        history.push(PIZZAS_SIZES)
    }, [add, history])

    return (
        <Container>
            <Grid item xs={12}>
                <Typography variant='h4'>
                    Cadastro novo tamanho
                </Typography>
            </Grid>

            <Form onSubmit={handleSubmit}>
             <TextField
                label='Nome para esse tamanha. Ex:  Pequena'
                name='name'
             />
             <TextField
                label='Diametro da pizza em cm'
                name='size'
             />
             <TextField
                label='Quantidade de fatias'
                name='slices'
             />
             <TextField
                label='Quantidade de sabores'
                name='flavours'
             />

            <Grid item container justify='flex-end' spacing={2}>
                <Grid item>
                    <Button 
                        variant='contained'
                        component={Link}
                        to={PIZZAS_SIZES}
                    >
                        Cancelar
                    </Button>
                </Grid>
                <Grid item>
                    <Button 
                    variant='contained' 
                    color='primary' 
                    type='submit'
                    >
                        Cadastrar
                    </Button>
                </Grid>
            </Grid>
            </Form>
        </Container>
    )
}

const Form = styled(Grid).attrs({
    item: true, 
    container: true,
    xs: 12,
    spacing: 2,
    component: 'form'
})``

const Container = styled(Grid).attrs({
    container: true,
    spacing: 2
})`
&&{
    margin-bottom: ${({ theme }) => theme.spacing(5)}
}
`

export default FormRegiterSize