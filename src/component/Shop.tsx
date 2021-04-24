import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
  // const fetchItems = () => {
  //   axios
  //     .get('https://fortnite-api.theapinetwork.com/upcoming/ge')
  //     .then(response => console.log(response))
  //     .catch(error => console.log(error));
  // };

  const [items, setItems] = useState([{ itemId: '', item: { name: '' } }]);
  const fetchItems = async () => {
    const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
    const item = await data.json();
    setItems(item.data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      {items.map(itemData => (
        <Link to={`/shop/${itemData.itemId}`}>
          <h1 key={itemData.itemId}>{itemData.item.name}</h1>
        </Link>
      ))}
    </div>
  );
};

export default Shop;
