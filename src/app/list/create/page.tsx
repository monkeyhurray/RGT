'use client';
import React, { useState } from 'react';
import { useBookMutation } from '@/hooks/useBookMutationHook';

const CreateBookPage = () => {
  const [addBook, setAddBook] = useState({
    title: '',
    author: '',
    amount: 0,
  });
  const { createBook } = useBookMutation();

  return (
    <div>
      <input
        onChange={(e) => {
          return setAddBook({ ...addBook, title: e.target.value });
        }}
      />
      <input
        onChange={(e) => {
          return setAddBook({ ...addBook, author: e.target.value });
        }}
      />
      <input
        onChange={(e) => {
          return setAddBook({ ...addBook, amount: Number(e.target.value) });
        }}
      />
      <button onClick={() => createBook(addBook)}>추가하기</button>
    </div>
  );
};

export default CreateBookPage;
