import styles from './page.module.scss'
import Link from 'next/link';

export default function Posts() {
  return( 
    <div className={styles.container}>
      <Link href="/posts/post1">お知らせ1</Link>
      <Link href="/posts/post2">お知らせ2</Link>
    </div>
  );
}
