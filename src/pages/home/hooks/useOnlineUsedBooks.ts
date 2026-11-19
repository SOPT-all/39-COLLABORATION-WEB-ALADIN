import { useQuery } from '@tanstack/react-query';

import { bookKeys } from '@constants/queryKeys';

import { getOnlineUsedBooks } from '../apis/getOnlineUsedBooks';

export const useOnlineUsedBooks = () =>
  useQuery({
    queryKey: bookKeys.onlineUsed(),
    queryFn: getOnlineUsedBooks,
  });
