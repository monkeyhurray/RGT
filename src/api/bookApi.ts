import axios from 'axios';
import { BookType } from '@/types/bookType';

const getBooks = async () => {
  const { data } = await axios.get(`
    ${process.env.NEXT_PUBLIC_SERVER_URL}/books`);
  return data;
};

const getBooksDetail = async (id: number) => {
  const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/books/${id}`;
  console.log('Request URL:', url); // 로그 추가
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.error('Error fetching book details:', error);
    throw error;
  }
};

const postAddBook = async (book: BookType) => {
  await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/books`, book);
};

const putBookContent = async (id: number) => {
  await axios.put(`${process.env.NEXT_PUBLIC_SERVER_URL}/books/${id}`);
};

const deleteBook = async (id: number) => {
  await axios.delete(`${process.env.NEXT_PUBLIC_SERVER_URL}/books/${id}`);
};

export { getBooks, getBooksDetail, postAddBook, putBookContent, deleteBook };
