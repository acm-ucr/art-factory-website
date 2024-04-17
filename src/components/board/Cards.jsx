import Card from "./Card";
import { Board } from "../../data/board.js";

const Cards = () => {
  return (
    <div className="w-5/6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {Board.map((CARD, index) => (
          <Card
            name={CARD.name}
            title={CARD.title}
            image={CARD.image}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
