import logo from '../../assets/logo.png';
import styles from './UserSection.module.scss';

export default function UserSection() {
  return (
    <section className={styles.userSection}>
      <img
        className="logo"
        src={logo}
        alt="Opção Única, corretora de seguros"
      />
      <nav className={styles.userSection__nav}>
        <a className={styles.userSection__navItem} href="/">
          Cadastrar Cliente
        </a>
        <a className={styles.userSection__navItem} href="/">
          Consultar Cliente
        </a>
        <a className={styles.userSection__navItem} href="/">
          Cadastrar Veículo
        </a>
        <a className={styles.userSection__navItem} href="/">
          Consultar Veículo
        </a>
      </nav>
    </section>
  );
}
