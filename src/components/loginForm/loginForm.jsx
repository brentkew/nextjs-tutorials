import { signIn } from "next-auth/react";
import styles from "./loginForm.module.css";
import Link from "next/link";
import { useState } from "react";
import { useFormState } from 'react-dom';

const websiteLogin = async (previousState, formData, setError) => {
  const { username, password } = Object.fromEntries(formData);
  try {
    const result = await signIn("credentials", {
      username,
      password,
      redirect: false, // Prevent automatic redirection
    });

    if (result.error) {
      setError(result.error === "CredentialsSignin" ? "Invalid credentials" : "An unexpected error occurred.");
    } else {
      setError(null);
    }
  } catch (error) {
    setError("An unexpected error occurred.");
  }
}

const LoginForm = () => {
  const [error, setError] = useState(null);
  const [state, formAction] = useFormState(
    async (previousState, formData) => await websiteLogin(previousState, formData, setError),
    undefined
  );

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="Enter username" name="username" required />
      <input type="password" placeholder="Enter password" name="password" required />
      <button type="submit">Login with Credentials</button>

      <p className={styles.footer}>
        {error && <span className={styles.error}>{error}</span>}
        <br /><br />
        {"Don't have an account? "}<b><Link href="/register">Register</Link></b>
      </p>
    </form>
  );
};

export default LoginForm;
