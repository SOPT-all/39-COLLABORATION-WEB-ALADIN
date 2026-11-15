export interface Review {
  id: string;
  author: string;
  createdAt: string;
  content: string;
  commentCount: number;
}

export const mockReviews: Review[] = [
  {
    id: 'review-1',
    author: '김하치와레',
    createdAt: '2016-11-18',
    content:
      '어떻게 얻은 민주주의인데... 우리의 힘은 ‘잊지말기’, ‘기억하기’ 그래서 ‘지켜내기’',
    commentCount: 9,
  },
  {
    id: 'review-2',
    author: '박치이카와',
    createdAt: '2016-11-18',
    content:
      '아픔과 슬픔은 경험해봐야 크게 공감할 수 있다지만, 글을 읽으면서도 이미 눈은 슬프고, 가슴은 아프다. 무섭도록 고요했던 그 도시, 오월의 봄. 감히 가늠할 수 없는 고통스런 학살을, 오랫동안 기억할 것이다. 인간의 존엄성과 함께!',
    commentCount: 2,
  },
];
