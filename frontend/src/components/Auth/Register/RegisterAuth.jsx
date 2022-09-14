import React, { useState } from 'react';
import { FormContainer, FormTitle } from '../../../UI/form/FormContainer';
import Input from '../../../UI/form/Input';
import InputContainer from '../../../UI/form/InputContainer';
import { HorizontalRule } from '../../../UI/form/HorizontalRule';
import { Button } from '../../../UI/form/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ButtonContainer } from '../../../UI/form/ButtonContainer';
import { toast } from 'react-toastify';
import register from '../../../features/auth/authSlice';

const initialState = {
  email: '',
  password: '',
  passwordConfirm: ''
};
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState(initialState);
  const { email, password, passwordConfirm } = data;
  const handleSubmit = (e) => {
    const { email, password, passwordConfirm } = e.element.target;
    e.preventDefault();
    if (password !== passwordConfirm) {
      toast.error('les deux mots de passe doivent être identique');
    } else {
      const RegisterData = {
        email: email.value,
        password: password.value,
        passwordConfirm: passwordConfirm.value
      };
      dispatch(register(RegisterData));
      console.log('data------------->', RegisterData);
    }
  };
  const handleChange = (e) => {
    setData({ [e.target.name]: e.target.value });
  };
  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle name="Bienvenue" />
      <InputContainer>
        <Input
          name="email"
          type="email"
          placeholder="Entrer votre Email"
          required
          onChange={handleChange}
          value={email}
        />
        <Input
          name="password"
          type="password"
          placeholder="Entrer votre mot de passe"
          required
          onChange={handleChange}
          value={password}
          autocomplete="new-password"
        />
        <Input
          name="passwordConfirm"
          type="password"
          placeholder="confirmer mot de passe"
          required
          onChange={handleChange}
          value={passwordConfirm}
          autocomplete="new-password"
        />
      </InputContainer>
      <ButtonContainer>
        <Button type="submit" name="S'enregistrer" />
      </ButtonContainer>
      <HorizontalRule />
    </FormContainer>
  );
};
export default Register;

// import React, { useState } from 'react';
// import { FormContainer, FormTitle } from '../../../UI/form/FormContainer';
// import { Label } from '../../../UI/form1/label/Label';
// import { Input } from '../../../UI/input/Input';
// const Register = () => {
//   const initialState = {
//     email: '',
//     pasword: '',
//     passwordConfirm: ''
//   };
//   const [formData, setFormData] = useState(initialState);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };
//   const handleChnage = (e) => {
//     const { name, value } = e.target;
//     setFormData(Object.assign(formData, { [name]: value }));
//   };
//   console.log('formData', formData);
//   return (
//     <FormContainer onSubmit={handleSubmit}>
//       <FormTitle>Sign In</FormTitle>
//       <Label>email</Label>
//       <Input
//         type="email"
//         name="email"
//         value={initialState.email}
//         required
//         onChange={handleChnage}
//       ></Input>
//       <Label>password</Label>
//       <Input
//         type="password"
//         name="password"
//         value={initialState.pasword}
//         required
//         onChange={handleChnage}
//       ></Input>
//       <Input
//         type="password"
//         name="passwordConfirm"
//         value={initialState.passwordConfirm}
//         required
//         onChange={handleChnage}
//       ></Input>
//     </FormContainer>
//   );
// };
// export default Register;

// // import React from 'react';
// // import Avatar from '@material-ui/core/Avatar';
// // import Button from '@material-ui/core/Button';
// // import CssBaseline from '@material-ui/core/CssBaseline';
// // import TextField from '@material-ui/core/TextField';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { registerUser } from '../../../features/user/userThunk';
// // import Link from '@material-ui/core/Link';
// // import Grid from '@material-ui/core/Grid';
// // import Box from '@material-ui/core/Box';
// // import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// // import Typography from '@material-ui/core/Typography';
// // import { makeStyles } from '@material-ui/core/styles';
// // import Container from '@material-ui/core/Container';

// // export default function Creercompte() {
// // 	const classes = useStyles();

// // 	const dispatch = useDispatch();
// // 	const { user } = useSelector((state) => state.user);

// // 	const handelSubmit = async (e) => {
// // 		e.preventDefault();
// // 		const { name, email, password, passwordConfirm } = e.target.elements;

// // 		let dataRegister = {
// // 			name: name.value,
// // 			email: email.value,
// // 			password: password.value,
// // 			passwordConfirm: passwordConfirm.value,
// // 		};

// // 		try {
// // 			dispatch(registerUser(dataRegister));
// // 		} catch (error) {
// // 			console.log(error);
// // 		}
// // 	};

// // 	return (
// // 		<Container component='main' maxWidth='xs' className={classes.root}>
// // 			<CssBaseline />
// // 			<div className={classes.paper}>
// // 				<Avatar className={classes.avatar}>
// // 					<LockOutlinedIcon />
// // 				</Avatar>
// // 				<Typography component='h1' variant='h5'>
// // 					Sign up
// // 				</Typography>
// // 				<form className={classes.form} noValidate onSubmit={handelSubmit}>
// // 					<Grid container spacing={2}>
// // 						<Grid item xs={12} sm={6}>
// // 							<TextField
// // 								autoComplete='Name'
// // 								name='name'
// // 								variant='outlined'
// // 								required
// // 								fullWidth
// // 								id='name'
// // 								label='Nom'
// // 								autoFocus
// // 							/>
// // 						</Grid>

// // 						<Grid item xs={12}>
// // 							<TextField
// // 								variant='outlined'
// // 								required
// // 								fullWidth
// // 								id='email'
// // 								label='Email Address'
// // 								name='email'
// // 								autoComplete='email'
// // 							/>
// // 						</Grid>
// // 						<Grid item xs={12}>
// // 							<TextField
// // 								variant='outlined'
// // 								required
// // 								fullWidth
// // 								name='password'
// // 								label='Password'
// // 								type='password'
// // 								id='password'
// // 								autoComplete='current-password'
// // 							/>
// // 						</Grid>
// // 						<Grid item xs={12}>
// // 							<TextField
// // 								variant='outlined'
// // 								required
// // 								fullWidth
// // 								name='passwordConfirm'
// // 								label='confirmer mot de passe'
// // 								type='password'
// // 								id='passwordConfirm'
// // 								autoComplete='current-password'
// // 							/>
// // 						</Grid>
// // 					</Grid>
// // 					<Button
// // 						type='submit'
// // 						fullWidth
// // 						variant='contained'
// // 						className={classes.submit}>
// // 						S'enregistrer
// // 					</Button>
// // 					<Grid container justifyContent='flex-end'>
// // 						<Grid item>
// // 							<Link href='#' variant='body2'>
// // 								Vous avez un compte? Connectez-vous
// // 							</Link>
// // 						</Grid>
// // 					</Grid>
// // 				</form>
// // 			</div>
// // 			<Box mt={5}>
// // 				<Copyright />
// // 			</Box>
// // 		</Container>
// // 	);
// // }
// // function Copyright() {
// // 	return (
// // 		<Typography variant='body2' color='textSecondary' align='center'>
// // 			{'Copyright © '}
// // 			<Link color='inherit' href='https://mui.com/'>
// // 				Enfant trouvé
// // 			</Link>{' '}
// // 			{new Date().getFullYear()}
// // 			{'.'}
// // 		</Typography>
// // 	);
// // }

// // const useStyles = makeStyles((theme) => ({
// // 	root: {
// // 		height: '100vh',
// // 		position: 'absolute',
// // 		top: '2rem',
// // 		right: '0',
// // 		left: '0',
// // 	},
// // 	paper: {
// // 		marginTop: theme.spacing(8),
// // 		display: 'flex',
// // 		flexDirection: 'column',
// // 		alignItems: 'center',
// // 	},
// // 	avatar: {
// // 		margin: theme.spacing(1),
// // 		backgroundColor: theme.palette.secondary.main,
// // 	},
// // 	form: {
// // 		width: '100%', // Fix IE 11 issue.
// // 		marginTop: theme.spacing(3),
// // 	},
// // 	submit: {
// // 		margin: theme.spacing(3, 0, 2),
// // 		color: theme.palette.grey[50],
// // 		backgroundColor: theme.palette.grey[600],
// // 	},
// // }));
