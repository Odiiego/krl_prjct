import styles from './Form.module.scss';
import { useForm } from 'react-hook-form';

export default function CadastrarCliente() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <h2>Cadastrar Cliente</h2>
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
            {...register('CPF', {
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

        <label>
          Nascimento:
          <input
            type="date"
            {...register('nascimento', {
              required: 'Esse campo é obrigatório',
              // pattern:
            })}
          />
          {errors.nome && <span>Valor inválido</span>}
        </label>

        <label>
          Estado Civil:
          <select {...register('estadoCivil')}>
            <option value="solteiro">Solteiro</option>
            <option value="casado">Casado</option>
            <option value="viúvo">Viúvo</option>
            <option value="divorciado">Divorciado</option>
          </select>
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
          CEP:
          <input
            placeholder="CEP"
            {...register('CEP', {
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
          Profissão:
          <input
            placeholder="Profissão"
            {...register('profissão', {
              required: 'Esse campo é obrigatório',
              // pattern:
            })}
          />
          {errors.nome && <span>Valor inválido</span>}
        </label>

        <label>
          Faixa Salárial:
          <input
            placeholder="Faixa Salárial"
            {...register('faixaSalarial', {
              required: 'Esse campo é obrigatório',
              // pattern:
            })}
          />
          {errors.nome && <span>Valor inválido</span>}
        </label>

        <label>
          Condutor Principal?
          <select {...register('condutorPrincipal')}>
            <option value="sim">Sim</option>
            <option value="não">Não</option>
          </select>
        </label>

        <label>
          Proprietário?
          <select {...register('proprietário')}>
            <option value="sim">Sim</option>
            <option value="não">Não</option>
          </select>
        </label>

        <button type="submit">Cadastrar</button>
      </form>
    </>
  );
}
