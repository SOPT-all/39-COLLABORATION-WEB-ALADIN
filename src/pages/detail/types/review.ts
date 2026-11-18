import type { ToggleReviewLikeParams } from '@apis/generated/dataContracts';

export interface Review {
  id: ToggleReviewLikeParams['reviewId'];
  author: string;
  createdAt: string;
  content: string;
  commentCount: number;
}
