import { signIn } from '../utils';
import styles from './Form.module.scss';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../firebase-config';

async function teste() {
  const docRef = await addDoc(collection(db, 'users'), {
    first: 'Ada',
    last: 'Lovelace',
    born: 1815,
  });
  console.log('Document written with ID: ', docRef.id);
}

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => signIn(data.email, data.senha);

  return (
    <>
      <button type="button" onClick={teste}>
        teste
      </button>
      <h2>Entrar</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label>
          Email
          <input
            placeholder="Email"
            {...register('email', {
              required: 'Esse campo é obrigatório',
              // pattern: colocar regex de email,
            })}
          />
          {errors.email && <span>Valor inválido</span>}
        </label>

        <label>
          Senha:
          <input
            placeholder="Senha"
            {...register('senha', {
              required: 'Esse campo é obrigatório',
            })}
          />
          {errors.senha && <span>Valor inválido</span>}
        </label>

        <button type="submit">Entrar</button>
      </form>
    </>
  );
}
