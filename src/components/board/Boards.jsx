import Card from "./Board";
import { Board as BoardData } from "../../data/board.js";

const Boards = () => {
  return (
    <div className="w-5/6 mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {BoardData.map((CARD, index) => (
          <Card
            name={CARD.name}
            title={CARD.title}
            image={CARD.image}
            key={index}
            custom={index * 0.1}
          />
        ))}
      </div>
    </div>
  );
};

export default Boards;
