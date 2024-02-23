import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {Avatar, Box, Button, Container, Grid, TextField, Typography} from '@mui/material';
import {ChangeEvent, useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../../app/hooks';
import {RegisterMutation} from '../../../types';
import {selectRegisterError} from '../UsersSlice';
import {register} from '../UsersThunk';

const Register = () => {
  const dispatch = useAppDispatch();
  const error = useAppSelector(selectRegisterError);
  const navigate = useNavigate();
  const [state, setState] = useState<RegisterMutation>({
    username: '',
    password: ''
  });

  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;

    setState(prevState => {
      return {...prevState, [name]: value};
    });
  };

  const getFieldError = (fieldName: string) => {
    try {
      return error?.errors[fieldName].message;
    } catch {
      return undefined;
    }
  };


  const submitFormHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await dispatch(register(state)).unwrap();
      navigate('/');
    } catch (e) {
      console.error(e);
    }
  };

  return (

    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
          <LockOutlinedIcon/>
        </Avatar>

        <Typography component="h1" variant="h5">
          Sign up
        </Typography>

        <Box component="form" noValidate onSubmit={submitFormHandler} sx={{mt: 3}}>
          <Grid container spacing={2}>

            <Grid item xs={12}>
              <TextField
                required
                label="Username"
                name="username"
                value={state.username}
                error={Boolean(getFieldError('username'))}
                helperText={getFieldError('username')}
                onChange={inputChangeHandler}
                autoComplete="new-username"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                name="password"
                label="Password"
                type="password"
                value={state.password}
                error={Boolean(getFieldError('password'))}
                helperText={getFieldError('password')}
                onChange={inputChangeHandler}
                autoComplete="new-password"
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="bg-dark"
            sx={{mt: 3, mb: 2}}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <NavLink to="/login">
                Already have an account? Sign in
              </NavLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>

  );
}


export default Register;

