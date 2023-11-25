import React, { useState } from "react";
import './App.css';
import contactsData from './data';

export default function App() {
  const [contactIndex, setContactIndex] = useState(0);
  const [contactsArray, setContactsArray] = useState(contactsData);

  const contact = contactsArray[contactIndex];

  const toggleFavorite = (index) => {
    setContactsArray((prevContacts) => {
      const updatedContacts = [...prevContacts];
      updatedContacts[index] = { ...updatedContacts[index], isFavorite: !updatedContacts[index].isFavorite };
      return updatedContacts;
    });
  };

  const contactsElements = contactsArray.map((el, index) => (
    <div className="card" key={index}>
      <h2>{el.firstName} {el.lastName}</h2>
      <p>{el.phone}</p>
      <p>{el.email}</p>
      <img
        src={el.imgUrl}
        alt="User Avatar"
        className="card--image"
      />
      {el.isFavorite ?
        <img
          src="/starOn.png"
          alt="fav"
          className="card--favorite"
          onClick={() => toggleFavorite(index)}
        /> :
        <img
          src="/starOff.png"
          alt="no fav"
          className="card--favorite"
          onClick={() => toggleFavorite(index)}
        />}
    </div>
  ));

  return (
    <main>
      {contactsElements}
    </main>
  );
}
