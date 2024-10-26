import styles from '../Layout';

export default function Home() {
  return (
    <>
      <h2 className={styles.menu__title}>Identificação</h2>
      <div className={styles.menu__option}>
        <p>novo por aqui?</p>
        <a href="/cadastro">Cadastre-se</a>
      </div>

      <div className={styles.menu__option}>
        <p>Já possui cadastro?</p>
        <a href="/login">Login</a>
      </div>
    </>
  );
}
