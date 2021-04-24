import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Item = (props: any) => {
  const [item, setItem] = useState({
    name: '',
    images: {
      icon: ''
    }
  });
  useEffect(() => {
    axios
      .get(`https://fortnite-api.theapinetwork.com/item/get?id=${props.match.params.id}`)
      .then(response => {
        console.log(response.data.data.item);
        setItem(response.data.data.item);
      })
      .catch(error => console.log(error));
  }, []);
  return (
    <div>
      <h2>{item.name}</h2>
      <img src={item.images.icon} alt={item.name} />
    </div>
  );
};

export default Item;
