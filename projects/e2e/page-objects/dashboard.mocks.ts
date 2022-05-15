import { jsonResponse } from '../utils/mock-network';

export const singlePostInList = jsonResponse(/\/posts/, [
  {
    id: 1,
    userId: 1,
    title: 'Test post',
    body: 'Lorem...',
  },
]);
