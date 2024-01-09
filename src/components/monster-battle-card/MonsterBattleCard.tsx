import { Monster } from "../../models/monster.interface";
import {
  BattleMonsterCard,
  BattleMonsterTitle,
  BattleMonsterImage,
  ProgressBar,
  BattleMonsterStat,
  BattleMonsterDivider,
} from "./MonsterBattleCard.styled";

type MonsterCardProps = {
  monster?: Monster | null;
  title?: string;
};

const MonsterBattleCard: React.FC<MonsterCardProps> = ({ title, monster }) => {
  if (monster) {
    return (
      <BattleMonsterCard>
        <BattleMonsterImage src={monster?.imageUrl} />
        <BattleMonsterTitle>{title!}</BattleMonsterTitle>
        <BattleMonsterDivider />
        {monster && (
          <>
            <BattleMonsterStat>{"HP"}</BattleMonsterStat>
            <ProgressBar
              value={monster.hp > 100 ? 100 : monster.hp}
              variant="determinate"
            />
            <BattleMonsterStat>{"Attack"}</BattleMonsterStat>
            <ProgressBar value={monster.attack} variant="determinate" />
            <BattleMonsterStat>{"Defense"}</BattleMonsterStat>
            <ProgressBar value={monster.defense} variant="determinate" />
            <BattleMonsterStat>{"Speed"}</BattleMonsterStat>
            <ProgressBar value={monster.speed} variant="determinate" />
          </>
        )}
      </BattleMonsterCard>
    );
  }
  return (
    <BattleMonsterCard centralized>
      <BattleMonsterTitle>{title!}</BattleMonsterTitle>
    </BattleMonsterCard>
  );
};

export { MonsterBattleCard };
