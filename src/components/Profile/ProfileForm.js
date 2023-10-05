import { useContext, useRef } from 'react'; 
import classes from './ProfileForm.module.css';
import AuthContext from '../../Store/auth-context';

const ProfileForm = () => {
const newPasswordRef=useRef();
const authCtx= useContext(AuthContext)

const enteredNewPassword = newPasswordRef.current.value

fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCvgSdZogyf3f_41WrxdfSUBWKxZslshVg',
{
  method:'POST',
  body:JSON.stringify({
    idToken:authCtx.token,
    password:enteredNewPassword,
    returnSecureToken:false
  }),headers:{
    'Content-Type': 'application/json'
  }
})

  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength='7' ref={enteredNewPassword} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
