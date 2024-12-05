'use client';
import BookList from '@/components/BookList';

import { useBookQueryHook } from '@/hooks/useBookQueryHook';
import styles from '@/styles/pages/book/Book.module.scss';
import React from 'react';

const BookListPage = () => {
  const { books, isPending, isError } = useBookQueryHook();

  return (
    <div className={styles['book']}>
      <BookList books={books} isPending={isPending} isError={isError} />
    </div>
  );
};

export default BookListPage;
