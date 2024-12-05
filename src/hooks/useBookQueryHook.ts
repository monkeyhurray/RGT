import { useQuery } from '@tanstack/react-query';
import { getBooks, getBooksDetail } from '@/api/bookApi';

export const useBookQueryHook = () => {
  const {
    data: books,
    isPending,
    isError,
  } = useQuery({
    queryFn: getBooks,
    queryKey: ['book'],
    retry: 1,
  });

  return { books, isPending, isError };
};

export const useBookDetailQueryHook = (id: number) => {
  const {
    data: bookDetail,
    isPending,
    isError,
  } = useQuery({
    queryFn: () => getBooksDetail(id),
    queryKey: ['bookDetail', id],
    retry: 1,
  });

  return { bookDetail, isPending, isError };
};
