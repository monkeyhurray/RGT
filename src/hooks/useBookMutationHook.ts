import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postAddBook, putBookContent, deleteBook } from '@/api/bookApi';

export const useBookMutation = () => {
  const queryClient = useQueryClient();

  const { mutate: createBook } = useMutation({
    mutationFn: postAddBook,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['book'] }),
  });

  const { mutate: modifyBook } = useMutation({
    mutationFn: (id: number) => putBookContent(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['book'] }),
  });

  const { mutate: removeBook } = useMutation({
    mutationFn: (id: number) => deleteBook(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['book'] }),
  });

  return { createBook, modifyBook, removeBook };
};
