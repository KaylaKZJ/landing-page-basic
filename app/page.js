import Navigation from './(components)/Navigation';
import Showcase from './(components)/Showcase';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Navigation />
        <Showcase />
      </main>
    </div>
  );
}
