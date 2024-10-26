import styles from './Form.module.scss';
import { useForm } from 'react-hook-form';

export default function CadastrarSeguradora() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <h2>Cadastrar Seguradora</h2>
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
          CNPJ:
          <input
            placeholder="CNPJ"
            {...register('CNPJ', {
              required: 'Esse campo é obrigatório',
              // pattern:
            })}
          />
          {errors.nome && <span>Valor inválido</span>}
        </label>

        <label>
          Endereço:
          <input
            placeholder="Endereço"
            {...register('endereço', {
              required: 'Esse campo é obrigatório',
              // pattern:
            })}
          />
          {errors.nome && <span>Valor inválido</span>}
        </label>

        <label>
          Telefone:
          <input
            placeholder="Telefone"
            {...register('telefone', {
              required: 'Esse campo é obrigatório',
              // pattern:
            })}
          />
          {errors.nome && <span>Valor inválido</span>}
        </label>

        <label>
          Email:
          <input
            placeholder="Email"
            type="email"
            {...register('email', {
              required: 'Esse campo é obrigatório',
              // pattern:
            })}
          />
          {errors.nome && <span>Valor inválido</span>}
        </label>

        <button type="submit">Cadastrar</button>
      </form>
    </>
  );
}
