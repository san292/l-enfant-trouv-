import Header from './Header/Header';
import Main from './Main/Main';

export { Header, Main };
// authService
// import axios from 'axios';

// const register = async (userData) => {
//   const response = await axios.post(
//     'http://localhost:8000/api/v1/auth/register',
//     // {
//     //   headers: {
//     //     'Content-Type': 'application/json;charset=UTF-8',
//     //     'Access-Control-Allow-Origin': '*'
//     //   }
//     // },
//     userData
//   );
//   if (response.data) {
//     localStorage.setItem('user', JSON.stringify(response.data));
//   }
//   console.log('response.data-------------->', response.data);
//   return response.data;
// };

// const authService = {
//   register
// };
// export default authService;
//  authSlice
//  import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import authService from './authService';

// // get user from localstorage
// const user = JSON.parse(localStorage.getItem('user'));

// const initialState = {
//   user: user ? user : null,
//   isError: false,
//   isSucces: false,
//   isLoading: false,
//   message: ''
// };

// // Register user
// export const register = createAsyncThunk(
//   'auth/register',
//   async (user, thunkAPI) => {
//     try {
//       return await authService.register(user);
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );
// export const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     reset: (state) => {
//       state.isError = false;
//       state.isSucces = false;
//       state.isLoading = false;
//       state.message = '';
//     }
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(register.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(register.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//         state.user = action.payload;
//       })
//       .addCase(register.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.message = action.payload;
//         state.user = null;
//       });
//   }
// });
// export const { reset } = authSlice.actions;
// export default authSlice.reducer;
//  seconnecter
//  import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { toast } from 'react-toastify';
// import { register, reset } from '../features/auth/authSlice';

// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';

// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';

// export default function Creercompte() {
//   const [formData, setformData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     passwordConfirm: ''
//   });
//   const { name, email, password, passwordConfirm } = formData;
//   const classes = useStyles();
//   let navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { user, isError, isSucces, message } = useSelector(
//     (state) => state.auth
//   );
//   useEffect(() => {
//     if (isError) {
//       toast.error(message);
//     }
//     if (isSucces || user) {
//       navigate('/seconnecter');
//     }
//     dispatch(reset);
//   }, [user, isError, isSucces, message, navigate, dispatch]);
//   const handelChange = (e) => {
//     setformData((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value
//     }));
//   };
//   console.log('hhvhjvhvhvvvh', formData);
//   const hendelSubmit = (e) => {
//     e.preventDefault();
//     if (password !== passwordConfirm) {
//       toast.error('les deux mot de passe doivent être identique');
//     } else {
//       const userData = {
//         name,
//         email,
//         password,
//         passwordConfirm
//       };
//       dispatch(register(userData));
//       navigate('/seconnecter');
//     }
//   };

//   return (
//     <Container component="main" maxWidth="xs" className={classes.root}>
//       <CssBaseline />
//       <div className={classes.paper}>
//         <Avatar className={classes.avatar}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           S'enregistrer
//         </Typography>
//         <form className={classes.form} onSubmit={hendelSubmit}>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 autoComplete="name"
//                 name="name"
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="name"
//                 label="name"
//                 autoFocus
//                 onChange={handelChange}
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//                 onChange={handelChange}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 name="password"
//                 label="password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//                 onChange={handelChange}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 name="passwordConfirm"
//                 label="passwordConfirm"
//                 type="password"
//                 id="passwordConfirm"
//                 autoComplete="current-password"
//                 onChange={handelChange}
//               />
//             </Grid>
//           </Grid>
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             className={classes.submit}
//           >
//             S'enregistrer
//           </Button>
//           <Grid container justifyContent="flex-end">
//             <Grid item>
//               <Link href="#" variant="body2">
//                 Vous avez un compte? Connectez-vous
//               </Link>
//             </Grid>
//           </Grid>
//         </form>
//       </div>
//       <Box mt={5}>
//         <Copyright />
//       </Box>
//     </Container>
//   );
// }
// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Enfant trouvé
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const useStyles = makeStyles((theme) => ({
//   root: {
//     height: '100vh',
//     position: 'absolute',
//     top: '2rem',
//     right: '0',
//     left: '0'
//   },
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center'
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(3)
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//     color: theme.palette.grey[50],
//     backgroundColor: theme.palette.grey[600]
//   }
// }));
