// import { API_URL } from '../../constants/env';
import { Monster } from "../../models/monster.interface";

const API_URL = "http://localhost:3000";

const battle = async (
  monsterA: Monster,
  monsterB: Monster
): Promise<Monster> => {
  const winner = await fetch(`${API_URL}/battles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      monseterOneCode: monsterA.code,
      monseterTwoCode: monsterB.code,
    }),
  }).then((response) => response.json());
  return winner.winner;
};

export const BattlesService = {
  battle,
};
