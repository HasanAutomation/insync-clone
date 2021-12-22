import React from 'react';
import Card from '../Card';

function ItemList({ items }) {
  return (
    <>
      {items.map(tagLine => (
        <Card item={tagLine} key={tagLine.text} />
      ))}
    </>
  );
}

export default ItemList;
