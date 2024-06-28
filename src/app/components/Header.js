import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link"; // Importando o Link do Next.js para navegação

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image height={80} width={80} src="https://pngfre.com/wp-content/uploads/cherry-42.png" alt="Logo" />
        <h2>Cherry Blossom After Winter</h2>
      </div>
      <nav className={styles.navbar}>
      </nav>

      <div className={styles.botaoCereja}>
        <button>🛒</button>
        <button>Adicionar Produto</button>
      </div>
    </header>
  );
}
