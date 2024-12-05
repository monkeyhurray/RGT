import Link from 'next/link';
import styles from '@/styles/components/layout/Header.module.scss';
import React from 'react';

const Header = () => {
  return (
    <nav className={styles['header']}>
      <Link href="/" className={styles['header-contents']}>
        홈페이지
      </Link>
      <Link href="/list" className={styles['header-contents']}>
        도서 리스트
      </Link>
      <Link href="/list/create" className={styles['header-contents']}>
        도서 추가
      </Link>
    </nav>
  );
};

export default Header;
