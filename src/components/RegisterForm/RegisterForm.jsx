import useForm from 'shared/api/hooks/useForm';
import styles from './RegisterForm.module.css';
import { initialState } from './initialState';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { name, email, password } = state;

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className={styles.group}>
        <label className={styles.label} htmlFor="">
          Username:
        </label>
        <input
          value={name}
          name="name"
          onChange={handleChange}
          className={styles.input}
          type="text"
          placeholder="Enter username"
          required
        />
      </div>
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
          placeholder="Enter user password"
          required
        />
      </div>
      <div className={styles.group}>
        <button type="submit">Registration</button>
      </div>
    </form>
  );
};

export default RegisterForm;