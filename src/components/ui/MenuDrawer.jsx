import * as React from 'react'
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import QrCodeIcon from '@mui/icons-material/QrCode';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import { useNavigate } from 'react-router-dom';

export function MenuDrawer(props){
  
  const [state, setState] = React.useState(false);

  const navigate = useNavigate()
  
  const toggleDrawer = (isopen)=>(event) => {
      setState(isopen);      
    };

  function updateView(args){

    props.menudisp(args)
    navigate(args.ruta)
    
  }

   const list = () => (  
     <Box
       role="presentation"
       onClick ={toggleDrawer(false)}
       onKeyDown={toggleDrawer(false)}
     >
       <List>
        <ListItem><h2> Menu Cajero</h2></ListItem> 
         {[{operacion:'Depositar a cuenta',ruta:'/cajero/deposito'}, 
           {operacion:'Retirar Efectivo', ruta:'/cajero/retiro'}, 
           {operacion:'Reposición de Tarjeta', ruta:'/cajero/reposicion'}, 
           {operacion:'Dinero disponible', ruta:'/cajero/saldo'}
          ].map((text, index) => (
           <ListItem button key={index} onClick={()=> updateView(text) }>
             <ListItemIcon>
               {
                 index === 0 ? <SavingsOutlinedIcon /> : 
                 index === 1 ? <AttachMoneyOutlinedIcon/> : 
                 index === 2 ? <ErrorOutlineOutlinedIcon/> : 
                               <LocalAtmOutlinedIcon/> 
                } 
             </ListItemIcon>
             <ListItemText  primary={text.operacion} />
           </ListItem>
         ))}
       </List>
       <Divider />
       <List>
         {['QR Lector', 'Mail', 'Log Out'].map((text, index) => (
           <ListItem button key={text}>
             <ListItemIcon>
               {index === 0 ? <QrCodeIcon /> :
                index === 1 ? <MailIcon /> : 
                              <LogoutIcon/>
              }
             </ListItemIcon>
             <ListItemText primary={text} />
           </ListItem>
         ))}
       </List>
     </Box>
   );

    return(
        <div >
        <IconButton sx={{mt: '16px', ml:'16px'}} onClick={toggleDrawer(true)} color="primary" aria-label="upload picture" component="span">
          <MenuIcon fontSize='large'/>
        </IconButton>
        <Drawer
            transitionDuration={{enter: 350, exit:450} }
            anchor='left'
            open={state}
            onClose={toggleDrawer(false)}
          >
            {list()}
        </Drawer>
        
        </div>
    );

}