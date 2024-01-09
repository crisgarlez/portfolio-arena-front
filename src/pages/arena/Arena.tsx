import { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import { MonstersList } from "../../components/monsters-list/MonstersList";
import { Title } from "../../components/title/Title";
import {
  BattleSection,
  PageContainer,
  StartBattleButton,
} from "./Arena.styled";
import { fetchMonstersData } from "../../reducers/monsters/monsters.actions";
import { useSelector } from "react-redux";
import {
  selectMonsters,
  selectSelectedComputer,
  selectSelectedMonster,
} from "../../reducers/monsters/monsters.selectors";
import { MonsterBattleCard } from "../../components/monster-battle-card/MonsterBattleCard";
import { battle } from "../../reducers/battle/battles.actions";
import { selectWinner } from "../../reducers/battle/battles.selectors";
import { WinnerDisplay } from "../../components/winner-display/WinnerDisplay";

const Arena = () => {
  const dispatch = useAppDispatch();

  const monsters = useSelector(selectMonsters);
  const selectedMonster = useSelector(selectSelectedMonster);
  const selectedComputer = useSelector(selectSelectedComputer);
  const winner = useSelector(selectWinner);

  useEffect(() => {
    dispatch(fetchMonstersData());
  }, []);

  const handleStartBattleClick = async () => {
    await dispatch(
      battle({
        monsterA: selectedMonster,
        monsterB: selectedComputer,
      })
    );
  };

  return (
    <PageContainer>
      <Title>Monsters Arena</Title>

      <MonstersList monsters={monsters} />

      {winner && <WinnerDisplay text={winner?.name || ""} />}

      <BattleSection>
        <MonsterBattleCard
          title={selectedMonster?.name || "Player"}
          monster={selectedMonster}
        ></MonsterBattleCard>
        <StartBattleButton
          data-testid="start-battle-button"
          disabled={selectedMonster === null || winner !== null}
          onClick={handleStartBattleClick}
        >
          Start Battle
        </StartBattleButton>
        <MonsterBattleCard
          title={selectedComputer?.name || "Computer"}
          monster={selectedComputer}
        ></MonsterBattleCard>
      </BattleSection>
    </PageContainer>
  );
};

export { Arena };
