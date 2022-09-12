// // import react
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// // import config axios

// // import css from material-ui
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import Link from '@material-ui/core/Link';
// import Paper from '@material-ui/core/Paper';
// import Box from '@material-ui/core/Box';
// import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';

// import { useDispatch, useSelector } from 'react-redux';
// import { loginUser } from '../../../features/user/userThunk';

// // function for login
// export default function SignInSide() {
<<<<<<< HEAD
// 	const classes = useStyles();
// 	let navigate = useNavigate();

// 	const dispatch = useDispatch();
// 	const { user, msg } = useSelector((state) => state.user);

// 	const handelSubmit = async (e) => {
// 		e.preventDefault();

// 		const { email, password } = e.target.elements;
// 		const loginData = {
// 			email: email.value,
// 			password: password.value,
// 		};
// 		try {
// 			dispatch(loginUser(loginData));
// 			setTimeout(() => {
// 				navigate('/');
// 			}, 2000);
		
// 		} catch (error) {
// 			console.log('erreuuuuuuuur', error);
// 		}
// 	};
// 	return (
// 		<Grid container component='main' className={classes.root}>
// 			<CssBaseline />
// 			<Grid item xs={false} sm={4} md={7} className={classes.image} />
// 			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
// 				<div className={classes.paper}>
// 					<Avatar className={classes.avatar}>
// 						<LockOutlinedIcon />
// 					</Avatar>
// 					<Typography component='h1' variant='h5'>
// 						Sign in
// 					</Typography>
// 					<form className={classes.form} noValidate onSubmit={handelSubmit}>
// 						<TextField
// 							variant='outlined'
// 							margin='normal'
// 							required
// 							fullWidth
// 							id='email'
// 							label='Email Address'
// 							name='email'
// 							autoComplete='email'
// 							autoFocus
// 						/>
// 						<TextField
// 							variant='outlined'
// 							margin='normal'
// 							required
// 							fullWidth
// 							name='password'
// 							label='Password'
// 							type='password'
// 							id='password'
// 							autoComplete='current-password'
// 						/>

// 						<Button
// 							type='submit'
// 							fullWidth
// 							variant='contained'
// 							className={classes.submit}>
// 							Se connecter
// 						</Button>
// 						<Grid container>
// 							<Grid item xs>
// 								<Link href='#' variant='body2'>
// 									Mot de passe oublié?
// 								</Link>
// 							</Grid>
// 							<Grid item>
// 								<Link href='creercompte' variant='body2'>
// 									{'Créer un compte'}
// 								</Link>
// 							</Grid>
// 						</Grid>
// 						<Box mt={5}>
// 							<Copyright />
// 						</Box>
// 					</form>
// 				</div>
// 			</Grid>
// 		</Grid>
// 	);
// }
// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		height: '100vh',
// 		position: 'relative',
// 		top: '5rem',
// 	},
// 	image: {
// 		backgroundImage: 'url(https://source.unsplash.com/random)',
// 		backgroundRepeat: 'no-repeat',
// 		backgroundColor:
// 			theme.palette.type === 'light'
// 				? theme.palette.grey[50]
// 				: theme.palette.grey[900],
// 		backgroundSize: 'cover',
// 		backgroundPosition: 'center',
// 	},
// 	paper: {
// 		margin: theme.spacing(8, 4),
// 		display: 'flex',
// 		flexDirection: 'column',
// 		alignItems: 'center',
// 	},
// 	avatar: {
// 		margin: theme.spacing(1),
// 		backgroundColor: theme.palette.secondary.main,
// 	},
// 	form: {
// 		width: '100%', // Fix IE 11 issue.
// 		marginTop: theme.spacing(3),
// 	},
// 	submit: {
// 		margin: theme.spacing(3, 0, 3),
// 	},
// }));
// function Copyright() {
// 	return (
// 		<Typography variant='body2' color='textSecondary' align='center'>
// 			{'Copyright © '}
// 			<Link color='inherit' href='https://mui.com/'>
// 				Enfant trouvé
// 			</Link>{' '}
// 			{new Date().getFullYear()}
// 			{'.'}
// 		</Typography>
// 	);
=======
//   const classes = useStyles();
//   let navigate = useNavigate();

//   const dispatch = useDispatch();
//   const { user, msg } = useSelector((state) => state.user);

//   const handelSubmit = async (e) => {
//     e.preventDefault();

//     const { email, password } = e.target.elements;
//     const loginData = {
//       email: email.value,
//       password: password.value
//     };
//     try {
//       dispatch(loginUser(loginData));
//       setTimeout(() => {
//         navigate('/');
//       }, 2000);
//     } catch (error) {
//       console.log('erreuuuuuuuur', error);
//     }
//   };
//   return (
//     <Grid container component="main" className={classes.root}>
//       <CssBaseline />
//       <Grid item xs={false} sm={4} md={7} className={classes.image} />
//       <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//         <div className={classes.paper}>
//           <Avatar className={classes.avatar}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <form className={classes.form} noValidate onSubmit={handelSubmit}>
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//             />
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//             />

//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               className={classes.submit}
//             >
//               Se connecter
//             </Button>
//             <Grid container>
//               <Grid item xs>
//                 <Link href="#" variant="body2">
//                   Mot de passe oublié?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link href="creercompte" variant="body2">
//                   {'Créer un compte'}
//                 </Link>
//               </Grid>
//             </Grid>
//             <Box mt={5}>
//               <Copyright />
//             </Box>
//           </form>
//         </div>
//       </Grid>
//     </Grid>
//   );
// }
// const useStyles = makeStyles((theme) => ({
//   root: {
//     height: '100vh',
//     position: 'relative',
//     top: '5rem'
//   },
//   image: {
//     backgroundImage: 'url(https://source.unsplash.com/random)',
//     backgroundRepeat: 'no-repeat',
//     backgroundColor:
//       theme.palette.type === 'light'
//         ? theme.palette.grey[50]
//         : theme.palette.grey[900],
//     backgroundSize: 'cover',
//     backgroundPosition: 'center'
//   },
//   paper: {
//     margin: theme.spacing(8, 4),
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
//     margin: theme.spacing(3, 0, 3)
//   }
// }));
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
>>>>>>> 11a5bc3775bbef8e10c8c6f7f2f635178db548c1
// }
