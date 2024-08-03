import styles from "./loginForm.module.css";
import Link from "next/link";
import {useFormState} from 'react-dom'

const websiteLogin = async(previousState, formData)=> {
  const { username, password } = Object.fromEntries(formData);
  try {
    await signIn("credentials", {username, password})
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" }
  }
}

const LoginForm = () => {
  const [state, formAction] = useFormState(websiteLogin, undefined);
  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder='Enter username' name="username" />
      <input type="password" placeholder="Enter password" name="password" />
      <button>Login with Cretentials</button>

      <p className={styles.footer}>
        {state?.error} <br /><br />
        {"Don't have an account "}<b><Link href="/register">Register</Link></b>
      </p>
    </form>
  );
};

export default LoginForm;
