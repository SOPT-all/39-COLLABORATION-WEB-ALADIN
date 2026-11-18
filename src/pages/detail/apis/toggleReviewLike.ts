import type {
  ToggleReviewLikeData,
  ToggleReviewLikeParams,
} from '@apis/generated/dataContracts';
import { apiClient } from '@apis/kyClient';

export const toggleReviewLike = async (
  reviewId: ToggleReviewLikeParams['reviewId'],
) => {
  if (!Number.isSafeInteger(reviewId) || reviewId < 1) {
    throw new Error('reviewId는 1 이상인 정수여야 합니다.');
  }

  const { data } = await apiClient
    .patch(`v1/reviews/${reviewId}/like`)
    .json<ToggleReviewLikeData>();

  if (data?.reviewId !== reviewId || typeof data.isLiked !== 'boolean') {
    throw new Error('리뷰 공감 응답을 확인할 수 없습니다.');
  }

  return { reviewId: data.reviewId, isLiked: data.isLiked };
};
