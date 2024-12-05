'use client';

import React, { use } from 'react';
import { useBookDetailQueryHook } from '@/hooks/useBookQueryHook';
import { useBookMutation } from '@/hooks/useBookMutationHook';

const BookDetailPage = ({ params }: { params: Promise<{ id: number }> }) => {
  const { id } = use(params);
  const { modifyBook, removeBook } = useBookMutation();
  const { bookDetail, isPending, isError } = useBookDetailQueryHook(id);

  const modifyBookFn = () => modifyBook(id);
  const removeBookFn = () => removeBook(id);

  if (isPending) {
    return <div>...로딩중</div>;
  }

  if (isError) {
    return <div>오류 발생</div>;
  }

  return (
    <div>
      <p>
        <span>{bookDetail.title}</span>
        <span>{bookDetail.author}</span>
        <span>{bookDetail.amount}</span>
      </p>

      <button onClick={modifyBookFn}>수정</button>
      <button onClick={removeBookFn}>삭제</button>
    </div>
  );
};

export default BookDetailPage;
