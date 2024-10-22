import styles from './Form.module.scss';
import { useForm } from 'react-hook-form';

export default function Cadastro() {
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
          Nome:
          <input
            placeholder="Nome"
            {...register('nome', {
              required: 'Esse campo é obrigatório',
              maxLength: 40,
            })}
          />
          {errors.nome && <span>Valor inválido</span>}
        </label>

        <label>
          CPF:
          <input
            placeholder="CPF"
            {...register('cpf', {
              required: 'Esse campo é obrigatório',
              // pattern: colcoar regex de cpf,
            })}
          />
          {errors.cpf && <span>Valor inválido</span>}
        </label>

        <label>
          Email:
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

        <label>
          Confirme a Senha:
          <input
            placeholder="Confirme a Senha"
            {...register('confirmacaoSenha', {
              required: 'Esse campo é obrigatório',
            })}
          />
          {errors.confirmacaoSenha && <span>Valor inválido</span>}
        </label>
        <button type="button">Cadastrar</button>
      </form>
    </>
  );
}
