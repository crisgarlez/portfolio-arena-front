import { createReducer } from "@reduxjs/toolkit";
import { Monster } from "../../models/monster.interface";
import {
  fetchMonstersData,
  setSelectedMonster,
  getRandomMonster,
} from "./monsters.actions";

interface MonsterState {
  monsters: Monster[];
  selectedMonster: Monster | null;
  selectedComputer: Monster | null;
}

const initialState: MonsterState = {
  monsters: [],
  selectedMonster: null,
  selectedComputer: null,
};

export const monstersReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchMonstersData.pending, (state) => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.rejected, (state) => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.fulfilled, (state, action) => ({
    ...state,
    monsters: action.payload,
  }));

  builder.addCase(setSelectedMonster, (state, action) => ({
    ...state,
    selectedMonster: action.payload,
  }));

  builder.addCase(getRandomMonster, (state, action) => {
    const monsters: Monster[] = state.monsters;

    if (state.selectedMonster) {
      const otherMonsters: Monster[] = monsters.filter(
        (monster) => monster.code !== state.selectedMonster?.code
      );

      const monster: Monster =
        otherMonsters[Math.floor(Math.random() * otherMonsters.length)];

      return {
        ...state,
        selectedComputer: monster,
      };
    }

    return {
      ...state,
      selectedComputer: null,
    };
  });
});
