import styles from './Form.module.scss';
import { useForm } from 'react-hook-form';

export default function CadastrarVeiculo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <h2>Cadastrar Veículo</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label>
          Modelo:
          <input
            placeholder="Modelo"
            {...register('modelo', {
              required: 'Esse campo é obrigatório',
            })}
          />
          {errors.nome && <span>Valor inválido</span>}
        </label>

        <label>
          Ano:
          <input
            placeholder="Ano"
            type="number"
            {...register('ano', {
              required: 'Esse campo é obrigatório',
              min: 1900,
              max: 2099,
              // pattern:
            })}
          />
          {errors.nome && <span>Valor inválido</span>}
        </label>

        <label>
          Cor:
          <input
            placeholder="Cor"
            {...register('cor', {
              required: 'Esse campo é obrigatório',
              // pattern:
            })}
          />
          {errors.nome && <span>Valor inválido</span>}
        </label>

        <label>
          Combustível:
          <input
            placeholder="Combustível"
            {...register('combustível', {
              required: 'Esse campo é obrigatório',
              // pattern:
            })}
          />
          {errors.nome && <span>Valor inválido</span>}
        </label>

        <label>
          Placa:
          <input
            placeholder="Placa"
            {...register('placa', {
              required: 'Esse campo é obrigatório',
              // pattern:
            })}
          />
          {errors.nome && <span>Valor inválido</span>}
        </label>

        <label>
          Chassi:
          <input
            placeholder="Chassi"
            {...register('chassi', {
              required: 'Esse campo é obrigatório',
              // pattern:
            })}
          />
          {errors.nome && <span>Valor inválido</span>}
        </label>

        <label>
          Possui rastreador ou algo semelhante?
          <select {...register('rastreador')}>
            <option value="sim">Sim</option>
            <option value="não">Não</option>
          </select>
        </label>

        <label>
          Local de pernoite:
          <select {...register('localPernoite')}>
            <option value="casa">Casa</option>
            <option value="rua">Rua</option>
            <option value="apartamento">Apartamento</option>
          </select>
        </label>

        <label>
          O veículo pernoita em garagem?
          <select {...register('garagem')}>
            <option value="sim">Sim</option>
            <option value="não">Não</option>
          </select>
        </label>

        <label>
          CEP do local de Pernoite:
          <input
            placeholder="CEP do local de pernoite"
            {...register('CEPPernoite', {
              required: 'Esse campo é obrigatório',
              // pattern:
            })}
          />
          {errors.nome && <span>Valor inválido</span>}
        </label>

        <label>
          O veículo é utilizado para atividade remunerada?
          <select {...register('atividadeRemunerada')}>
            <option value="sim">Sim</option>
            <option value="não">Não</option>
          </select>
        </label>

        <label>
          O veículo é utilizado para ir ao trabalho ou estudo?
          <select {...register('atividadeRotina')}>
            <option value="sim">Sim</option>
            <option value="não">Não</option>
          </select>
        </label>

        <label>
          O local de trabalho/estudo possui estacionamento?
          <select {...register('estacionamento')}>
            <option value="sim">Sim</option>
            <option value="não">Não</option>
          </select>
        </label>

        <button type="submit">Cadastrar</button>
      </form>
    </>
  );
}
