import Card from "./Board";
import { Board } from "@/data/board.js";

const Boards = () => {
  return (
    <div className="w-5/6 mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
        {Board.map((CARD, index) => (
          <Card
            name={CARD.name}
            title={CARD.title}
            image={CARD.image}
            intros={CARD.intro}
            key={index}
            custom={index * 0.1}
          />
        ))}
      </div>
    </div>
  );
};

export default Boards;
