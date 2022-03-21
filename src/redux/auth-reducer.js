import { requestAPI } from '../api/api';

export const loginUser = () => ({ type: 'LOGIN-USER' });
export const createUserLogin = (content) => ({
  type: 'CREATE-USER-LOGIN',
  content
});
export const createUserPassword = (content) => ({
  type: 'CREATE-USER-PASSWORD',
  content
});
export const setUserInfo = (content) => ({
  type: 'SET-USER-INFO',
  content
});

const initState = {
  id: null,
  isAuth: false,
  loginValue: '',
  passwordValue: '',
  firstName: '',
  lastName: '',
  photo: '',
  dateOfBirth: '',
  sex: ''
};

function authReducer(state = initState, action) {
  switch (action.type) {
    case 'LOGIN-USER': {
      const stateCopy = {
        ...state,
        isAuth: true
      };

      stateCopy.loginValue = '';
      stateCopy.passwordValue = '';

      return stateCopy;
    }
    case 'CREATE-USER-LOGIN': {
      const stateCopy = {
        ...state,
        loginValue: action.content
      };

      return stateCopy;
    }
    case 'CREATE-USER-PASSWORD': {
      const stateCopy = {
        ...state,
        passwordValue: action.content
      };

      return stateCopy;
    }
    case 'SET-USER-INFO': {
      debugger;

      const stateCopy = {
        ...state,
        id: action.content.id,
        firstName: action.content.firstName,
        lastName: action.content.lastName,
        dateOfBirth: action.content.dateOfBirth,
        photo: action.content.photo,
        sex: action.content.sex,
        isAuth: true
      };

      return stateCopy;
    }
    default:
      return state;
  }
}

export const login = (credentials, callback) => (dispatch) => {
  requestAPI.login(credentials).then((data) => {
    dispatch(setUserInfo(data));
    dispatch(loginUser());
    callback(data);
  });
};

export default authReducer;
