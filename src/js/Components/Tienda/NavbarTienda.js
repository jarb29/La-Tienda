import React from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import logo from '../Home_principal/logo_transparent_background.png';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
      display: 'flex',
      backgroundColor: '#252525'
  },
  appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
      }),
  },
  appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
      }),
  },
  menuButton: {
      marginRight: 36,
  },
  hide: {
      display: 'none',
  },
  drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
  },
  drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
      }),
  },
  drawerClose: {
      transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9) + 1,
      },
  },
  toolbar: {
      display: 'flex',
      color: '#ff8d1e',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
  },
  content: {
      flexGrow: 1,
      padding: theme.spacing(3),
  },
  button: {
      backgroundColor: '#ff8d1e',
      border: 0,
      borderRadius: 10,
      color: 'black',
      height: 40,
      padding: '0 30px',
      '&:hover': {
          backgroundColor: '#ff8d1e',
          borderColor: 'none',
          boxShadow: 'none',
      },
      '&:active': {
          boxShadow: 'none',
          backgroundColor: '#ff8d1e',
          borderColor: 'none',
      },
      '&:focus': {
          backgroundColor: '#ff8d1e',
          boxShadow: 'none'
      },
  },
  bgColor: {
      color: '#252525',

  },
  Color: {
      color: '#252525',
  }


}));

export default function NavbarTienda(props) {
  const classes = useStyles();
  const [open] = React.useState(false);

    return (
      <div className={classes.root} >
      <CssBaseline />
      <AppBar
          position="absolute"
          className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
          })}
      >
          <Toolbar className={classes.root}>
              <Link to='/' >
                <img src={logo} alt='' className='logo-principal'/>
              </Link>
              <h4 className='pl-5'>{props.tienda.nombre}</h4>
          </Toolbar>
      </AppBar>
      </div>
    )
}
