import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Context } from '../../AppContext';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IngresoCliente from '../RegistrationForm/IngresoCliente';
import RegistFormCliente from '../RegistrationForm/RegistFormCliente';
import { withRouter } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
        La Tienda
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
      backgroundColor: '#252525'
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',

  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    backgroundColor: '#ff8d1e',
    color: '#f5f3f3',
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
}));

const steps = ['Ingreso Cliente', 'Registro Formulario cliente'];

function getStepContent(step) {


  switch (step) {
    case 0:
      return <IngresoCliente />;
    case 1:
      return <RegistFormCliente />;
    default:
      throw new Error('Unknown step');
  }
}

function IngresoClienteModal(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const { actions, store } = useContext(Context);
  const [open, setOpen] = React.useState(false);

  const handleNext = (e) => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return ;
    }
    actions.deleteErrors();
    setOpen(false);
  };

  useEffect(() => {
    if(!!store.error) setOpen(true);

  });


  
  return (
    <main>
      <Paper >
      {
          !!store.error && (
            
              <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical:'top', horizontal:'center' }}> 
                <Alert onClose={handleClose} severity="error">
                    {store.error.msg}
                </Alert>
              </Snackbar>
            )
        }
        <React.Fragment>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Gracias por registrarse con nosotros
                </Typography>
            </React.Fragment>
          ) : (

              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Volver
                    </Button>
                  )}
                  {activeStep === steps.length - 1 ? (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={
                        (store.clave) ?
                          e => {
                            handleNext(e)
                            actions.handleSubmitCliente(e, props.history)
                          }
                          :
                          e => {
                            actions.handleSubmitCliente(e, props.history)
                          }
                      }
                      className={classes.button}
                    >
                      Registrate
                    </Button>
                  ) : (
                      <Typography
                        variant="button"
                        color="primary"
                        onClick={handleNext}
                      >
                        <Link href="#" style={{marginTop: '20px', marginBottom:'10px'}}>
                          No tienes una cuenta? Registrate
                        </Link>
                      </Typography>
                    )}
                </div>
              </React.Fragment>
            )}
        </React.Fragment>
      </Paper>
      <Box mt={8}>
        <Copyright />
      </Box>
    </main>
  );
}


export default withRouter(IngresoClienteModal);