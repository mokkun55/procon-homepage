import styles from './page.module.scss'
import Link from 'next/link';

export default function Notice() {
  return( 
    <div className={styles.container}>
      <Link href="/Notice/post1">お知らせ1</Link>
      <Link href="/Notice/post2">お知らせ2</Link>
    </div>
  );
}
