import styles from './page.module.scss'
import Link from 'next/link';

export default function Notice() {
  return( 
    <div className={styles.container}>
      <Link href="/notice/post1">お知らせ1</Link>
      <Link href="/notice/post2">お知らせ2</Link>
    </div>
  );
}
