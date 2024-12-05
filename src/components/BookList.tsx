import styles from '@/styles/components/BookList.module.scss';
import React from 'react';
import { BookType } from '@/types/bookType';
import Link from 'next/link';
import Pagination from './Pagination';
import { useSearchParams, useRouter } from 'next/navigation';

const BookList = ({
  books,
  isPending,
  isError,
}: {
  books: BookType[];
  isPending: boolean;
  isError: boolean;
}) => {
  const itemsPerPage = 10;
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentPage = parseInt(searchParams.get('page') || '1', 10);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentBooks = books?.slice(startIndex, startIndex + itemsPerPage);

  if (isPending) {
    return <div>...로딩중</div>;
  }

  if (isError) {
    return <div>오류 발생</div>;
  }

  const handlePageChange = (page: number) => {
    router.push(`?page=${page}`);
  };

  return (
    <>
      <main className={styles['bookList']}>
        <table>
          <colgroup>
            <col />
            <col />
            <col />
            <col />
          </colgroup>
          <thead className={styles['bookList-head']}>
            <tr>
              <th></th>
              <th>제목</th>
              <th>저자</th>
              <th>수량</th>
            </tr>
          </thead>
          <tbody>
            {currentBooks.map((e: BookType) => {
              return (
                <tr key={e.id} className={styles['bookList-list']}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <Link
                      href={`/list/view/${e.id}`}
                      className={styles['bookList-list-link']}
                    >
                      {e.title}
                    </Link>
                  </td>
                  <td>
                    <Link
                      href={`/list/view/${e.id}`}
                      className={styles['bookList-list-link']}
                    >
                      {e.author}
                    </Link>
                  </td>
                  <td>
                    <Link
                      href={`/list/view/${e.id}`}
                      className={styles['bookList-list-link']}
                    >
                      {e.amount}
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>

      <Pagination
        totalItems={books.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default BookList;
