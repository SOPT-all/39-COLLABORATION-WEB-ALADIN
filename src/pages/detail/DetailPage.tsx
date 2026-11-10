import { useParams } from 'react-router';

const DetailPage = () => {
  const { bookId } = useParams<{ bookId: string }>();

  return <h1>Detail {bookId}</h1>;
};

export default DetailPage;
