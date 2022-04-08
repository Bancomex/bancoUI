import * as React from 'react'
import Typography from '@mui/material/Typography';
import { Container, Divider, Stack } from '@mui/material';
import { MenuDrawer } from './MenuDrawer';

export function Header(){
    
    const options = {day:'numeric',month:'long', year:'numeric'};
    const dateToday = new Date();
    const stringDate = dateToday.toLocaleDateString('es-MX',options);
    const [menuDisplay,setmenuDisplay] = React.useState({operacion:'Depositar a cuenta',ruta:'/Deposito'});
    return(
        <>
        <MenuDrawer menudisp={menuDisplay=>setmenuDisplay(menuDisplay)} />
        
        <Container maxWidth='lg' >
                   
            <Stack direction='row' justifyContent='space-around' alignItems='center' >
                
                <Typography display='inline-flex' mb={1}  variant='h4' > {menuDisplay.operacion} </Typography>
                   
            </Stack>
            <Stack direction='row' justifyContent='space-around' mt={1} >
                <Typography display='inline-flex'  variant='h5'>Ingresar datos </Typography>
                <Typography display='inline-flex' variant='h5'>Fecha </Typography>
                <Typography display='inline-flex' variant='h5'> {stringDate} </Typography>
            </Stack>
            
            <Divider sx={{marginBottom: 2}}/>
            
        </Container>
        
        </>

    );
}