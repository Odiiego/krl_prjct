import styles from './Form.module.scss';
import { useForm } from 'react-hook-form';

export default function CadastrarSeguro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <h2>Cadastrar Seguro</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label>
          CPF do segurado:
          <input
            placeholder="CPF do segurado"
            {...register('CPF', {
              required: 'Esse campo é obrigatório',
              maxLength: 40,
            })}
          />
          {errors.nome && <span>Valor inválido</span>}
        </label>

        <label>
          Placa do veículo:
          <input
            placeholder="Placa do veículo"
            {...register('placa', {
              required: 'Esse campo é obrigatório',
              // pattern:
            })}
          />
          {errors.nome && <span>Valor inválido</span>}
        </label>

        <label>
          Seguradora:
          <input
            placeholder="Seguradora"
            {...register('seguradora', {
              required: 'Esse campo é obrigatório',
              // pattern:
            })}
          />
          {errors.nome && <span>Valor inválido</span>}
        </label>

        <label>
          Data de contratação:
          <input
            type="date"
            {...register('dataContratação', {
              required: 'Esse campo é obrigatório',
              // pattern:
            })}
          />
          {errors.nome && <span>Valor inválido</span>}
        </label>

        <label>
          Data de vencimento:
          <input
            type="date"
            {...register('dataVencimento', {
              required: 'Esse campo é obrigatório',
              // pattern:
            })}
          />
          {errors.nome && <span>Valor inválido</span>}
        </label>

        <label>
          Forma de pagamento:
          <input
            placeholder="Forma de pagamento"
            {...register('formaDePagamento', {
              required: 'Esse campo é obrigatório',
              // pattern:
            })}
          />
          {errors.nome && <span>Valor inválido</span>}
        </label>

        <label>
          Apólice:
          <input
            placeholder="Apólice"
            {...register('apolice', {
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
