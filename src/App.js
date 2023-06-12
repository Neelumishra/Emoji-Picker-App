import React, { useEffect, useState } from 'react';
import './style.css';

export default function App() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState('all');

  function handlechange(e) {
    setValue(e.target.value);
  }
  useEffect(() => {
    fetch(`https://api.api-ninjas.com/v1/emoji?name=${value}`, {
      method: 'GET',
      headers: {
        'X-Api-Key': '2u/LkWxzcDHOTUEydMM6kw==uoJaP2rbvLT3wQbj',
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((data) => setData(data));
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Emoji Name"
        onChange={handlechange}
      />
      <div
        style={{
          display: 'grid',
          gridTemplateRows: 'auto',
          gridTemplateColumns: '50px 50px 50px 50px',
        }}
      >
        {data?.map((e) => (
          <div>{e.character}</div>
        ))}
      </div>
    </div>
  );
}
