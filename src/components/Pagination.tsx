import React from 'react';
import styles from '@/styles/components/Pagination.module.scss';

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}: {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <ul className={styles['pages']}>
      <li
        className={`${currentPage === 1 && styles.invisible}`}
        onClick={() => onPageChange(currentPage - 1)}
      >
        이전
      </li>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <li key={page}>
          <button
            onClick={() => onPageChange(page)}
            className={`${currentPage === page ? styles.active : ''}`}
          >
            {page}
          </button>
        </li>
      ))}

      <li
        className={`${currentPage === totalPages && styles.invisible}`}
        onClick={() => onPageChange(currentPage + 1)}
      >
        다음
      </li>
    </ul>
  );
};

export default Pagination;
