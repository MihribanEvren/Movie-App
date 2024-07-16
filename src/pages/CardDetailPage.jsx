import React from 'react';
import { useParams } from 'react-router-dom';

function CardDetailPage() {
  const { id } = useParams();

  return <div>CardDetailPage for ID: {id}</div>;
}

export default CardDetailPage;
