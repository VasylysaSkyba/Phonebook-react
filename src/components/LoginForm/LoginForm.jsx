import useForm from 'shared/api/hooks/useForm';
import styles from './LoginForm.module.css';
import { initialState } from './initialState';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { email, password } = state;

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className={styles.group}>
        <label className={styles.label} htmlFor="">
          User email:
        </label>
        <input
          value={email}
          name="email"
          onChange={handleChange}
          className={styles.input}
          type="email"
          placeholder="Enter user email"
          required
        />
      </div>
      <div className={styles.group}>
        <label className={styles.label} htmlFor="">
          User password:
        </label>
        <input
          value={password}
          name="password"
          onChange={handleChange}
          className={styles.input}
          type="password"
          placeholder="Should be at least 7 characters"
          required
        />
      </div>
      <div className={styles.group}>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;