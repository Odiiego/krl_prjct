import styles from './Form.module.scss';
import { useForm } from 'react-hook-form';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <h2>Cadastrar</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label>
          Email/CPF
          <input
            placeholder="Email/CPF"
            {...register('emailOuCPF', {
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

        <button type="button">Entrar</button>
      </form>
    </>
  );
}
