import type { FindOnlineUsedBooksData } from '@apis/generated/dataContracts';
import { apiClient } from '@apis/kyClient';

export const getOnlineUsedBooks = () =>
  apiClient.get('v1/books/online-used').json<FindOnlineUsedBooksData>();
