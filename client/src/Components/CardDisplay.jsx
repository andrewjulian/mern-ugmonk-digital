import React, { useState, useEffect } from "react";
import Card from "./Card";

const CardDisplay = ({ user }) => {
  const [cards, setCards] = useState([]);

  console.log(user);

  /*  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/user/:id/cards",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        console.log("data", data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCards();
  }, []); */

  /* const displayCards = user.userCards.map((card) => {
    return <Card key={card._id} card={card} />;
  }); */

  return (
    <div className="text-center align-middle mt-10">
      <Card />
      <button className="bg-[#7e6e45] rounded-xl text-white my-7 px-3 py-1">
        <p>Add Card</p>
      </button>
    </div>
  );
};

export default CardDisplay;
