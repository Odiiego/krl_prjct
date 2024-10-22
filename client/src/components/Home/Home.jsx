import logo from '../../assets/logo.png';
import styles from './Home.module.scss';

export default function Home({ children }) {
  return (
    <section className={styles.home}>
      <img
        className={styles.logo}
        src={logo}
        alt="Opção Única, corretora de seguros"
      />
      <div className={styles.menu}>
        {children ? (
          children
        ) : (
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
        )}
      </div>
    </section>
  );
}
