// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// // == Import library @material-ui
// import { makeStyles } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import {
//   Avatar,
//   Button,
//   TextField,
//   Grid,
//   Typography,
//   Container
// } from '@material-ui/core';
// // == Import components

// import { red } from '@material-ui/core/colors';

// const SignIn = () => {
//   const classes = useStyles();
//   const [data, setData] = useState({
//     email: '',
//     password: ''
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//   };
//   const handleChange = async (e) => {
//     e.preventDefault();

//     // on récupére les donnée du formulaire de login

//     setData({ [e.target.name]: e.target.value });
//     console.log('dataaaaaaaaaaaaaaa', data);
//   };

//   return (
//     <>
//       <Container component="main" maxWidth="xs" className={classes.root}>
//         <CssBaseline />
//         <div className={classes.paper}>
//           <Avatar className={classes.avatar}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             S'identifier
//           </Typography>
//           <form className={classes.form} onSubmit={handleSubmit}>
//             <TextField
//               variant="outlined"
//               margin="normal"
//               fullWidth
//               id="email"
//               label="Adresse email"
//               name="email"
//               autoComplete="email"
//               type="email"
//               required
//               autoFocus
//               onChange={handleChange}
//             />
//             <TextField
//               variant="outlined"
//               margin="normal"
//               fullWidth
//               name="password"
//               label="Mot de passe"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//               required
//               onChange={handleChange}
//             />

//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               className={classes.submit}
//             ></Button>
//             <Grid container className={classes.creerCompte}>
//               <Grid item xs>
//                 {/* Lien vers mot de passe oublié sprint X
//                 <Link href="#" variant="body2">
//                   Mot de passe oublié?
//                 </Link> */}
//               </Grid>
//               <Grid item>
//                 <Link to="/creerCompte" className={classes.link}>
//                   {'Créer un compte'}
//                 </Link>
//               </Grid>
//             </Grid>
//           </form>
//         </div>
//       </Container>
//     </>
//   );
// };

// // == Css styles
// const useStyles = makeStyles((theme) => ({
//   root: {
//     padding: theme.spacing(1)
//   },
//   paper: {
//     marginTop: theme.spacing(10),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     background: 'white',
//     backgroundColor: '#F3F4EE',
//     color: '#424642'
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: 'gray'
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1)
//   },
//   submit: {
//     margin: theme.spacing(4, 0, 2),
//     background: 'rgb(100 116 139)',
//     color: '#ffef62'
//   },
//   error: {
//     color: red
//   },

//   creerCompte: {
//     margin: 'auto'
//   },

//   link: {
//     color: 'MediumBlue',
//     textDecoration: 'underline',
//     '&:hover': {
//       color: 'purple',
//       textDecoration: 'underline'
//     }
//   }
// }));

// export default SignIn;
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

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

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              Se connecter
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Mot de passe oublié?
                </Link>
              </Grid>
              <Grid item>
                <Link href="creercompte" variant="body2">
                  {'Créer un compte'}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    position: 'relative',
    top: '5rem'
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  paper: {
    margin: theme.spacing(8, 4),
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
    margin: theme.spacing(3, 0, 3)
  }
}));
