import styles from './page.module.scss'
import Link from 'next/link';

export default function Works() {
  return (
    <div className={styles.container}>
     <Link href="/works/hogehoge">ほげほげ</Link>
     <Link href="/works/hagehage">はげはげ</Link>
      

    </div>
  );

}
