import { useState } from "react";
import { Monster } from "../../models/monster.interface";
import {
  Image,
  ListTitle,
  MonsterCard,
  MonsterName,
  MonstersSection,
} from "./MonstersList.styled";
import { useAppDispatch } from "../../app/hooks";
import {
  getRandomMonster,
  setSelectedMonster,
} from "../../reducers/monsters/monsters.actions";
import { resetWinner } from "../../reducers/battle/battles.actions";

type MonstersListProps = {
  monsters: Monster[];
};

const MonstersList: React.FC<MonstersListProps> = ({ monsters }) => {
  const dispatch = useAppDispatch();

  const [selectedMonsterId, setSelectedMonsterId] = useState<string | null>(
    null
  );

  const handleMonsterClick = async (monster: Monster) => {
    const value = selectedMonsterId === monster.code ? null : monster.code;
    setSelectedMonsterId(value);
    dispatch(setSelectedMonster(!value ? null : monster));
    dispatch(getRandomMonster());
    dispatch(resetWinner());
  };

  return (
    <div>
      <ListTitle>
        {monsters.length > 0 ? "Select your monster" : "No monsters available"}
      </ListTitle>

      <MonstersSection data-testid="monsters-list-section">
        {monsters.map((monster) => (
          <MonsterCard
            key={monster.code}
            onClick={() => handleMonsterClick(monster)}
            selected={monster.code === selectedMonsterId}
            data-testid={monster.code}
          >
            <Image src={monster.imageUrl} />
            <MonsterName>{monster.name}</MonsterName>
          </MonsterCard>
        ))}
      </MonstersSection>
    </div>
  );
};

export { MonstersList };
