import './Buscador.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState } from "react";

const Buscador = ( { onBuscar } ) => {
    const [criterioBusqueda, setCriterioBusqueda] = useState('');

    return (
        <section className="buscador">
            
            <Box
            component="form"
            sx={{
                '& > :not(style)': {m: 1, width: '35ch'},
            }}
            noValidate
            autoComplete="off"
            >
            <TextField id="outlined-basic" 
                        role="searchbox"
                        value={criterioBusqueda}
                        onChange={(e) => { 
                            setCriterioBusqueda(e.target.value)
                        }}/>

            </Box> 
            
            <Stack  display="flex" justifyContent="center" alignItems="center">
            <Button disabled={!(criterioBusqueda.length>2)} variant="outlined"   
                    role="button"
                    onClick={() => {
                        onBuscar(criterioBusqueda)
                    }}
                    >Buscar</Button>
            </Stack>
            
        </section>
        
    )


}

export default Buscador;