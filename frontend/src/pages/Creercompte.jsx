import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { register, reset } from '../features/auth/authSlice';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

export default function Creercompte() {
  const [formData, setformData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: ''
  });
  const { name, email, password, passwordConfirm } = formData;
  const classes = useStyles();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isError, isSucces, message } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSucces || user) {
      navigate('/seconnecter');
    }
    dispatch(reset);
  }, [user, isError, isSucces, message, navigate, dispatch]);
  const handelChange = ({ target }) => {
    const { name, value } = target;
    setformData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  console.log('hhvhjvhvhvvvh', formData);
  const hendelSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      toast.error('les deux mot de passe doivent être identique');
    }
    dispatch(register(formData));
    navigate('/seconnecter');
  };

  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          S'enregistrer
        </Typography>
        <form className={classes.form} onSubmit={hendelSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="name"
                autoFocus
                onChange={handelChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handelChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handelChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="passwordConfirm"
                label="passwordConfirm"
                type="password"
                id="passwordConfirm"
                autoComplete="current-password"
                onChange={handelChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
          >
            S'enregistrer
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Vous avez un compte? Connectez-vous
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Enfant trouvé
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    position: 'absolute',
    top: '2rem',
    right: '0',
    left: '0'
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: theme.palette.grey[50],
    backgroundColor: theme.palette.grey[600]
  }
}));
