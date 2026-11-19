import { useMutation } from '@tanstack/react-query';

import type { ToggleReviewLikeParams } from '@apis/generated/dataContracts';

import { toggleReviewLike } from '../apis/toggleReviewLike';

export const useToggleReviewLike = (
  reviewId: ToggleReviewLikeParams['reviewId'],
) =>
  useMutation({
    mutationFn: () => toggleReviewLike(reviewId),
  });
