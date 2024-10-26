import logo from '../assets/logo.png';
import styles from './Layout.module.scss';

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <section className={styles.home}>
      <img
        className="logo"
        src={logo}
        alt="Opção Única, corretora de seguros"
      />
      <div className={styles.children}>{children}</div>
    </section>
  );
}
