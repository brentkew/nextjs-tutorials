import { registerUser } from "@/lib/actions";
import styles from "./registerForm.module.css";
import Link from "next/link";
import {useFormState} from 'react-dom'
import { useEffect } from "react";
import { useRouter } from "next/navigation";


const RegisterForm = () => {
  const [state, formAction] = useFormState(registerUser, undefined);
  const router = useRouter();

  useEffect( ()=> {
    state?.success && router.push("/login");
  }, [state?.success, router])

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" name="username" placeholder="Username" />
      <input type="email" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Password" />
      <input
        type="password"
        name="passwordAgain"
        placeholder="Enter password again"
      />
      <button>Register</button>
      
      <p className={styles.footer}>
        {state?.error} <br /><br />
        Already have an account <b><Link href="/login">Signin</Link></b>
      </p>
    </form>
  );
};

export default RegisterForm;
