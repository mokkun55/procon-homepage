import styles from './page.module.scss'
import Link from 'next/link';

export default function Works() {
  return (
    <div className={styles.container}>
     <Link href="/Works/hogehoge">ほげほげ</Link>
     <Link href="/Works/hagehage">はげはげ</Link>
      

    </div>
  );

}
