import { createReducer } from "@reduxjs/toolkit";
import { Monster } from "../../models/monster.interface";
import { battle, resetWinner } from "./battles.actions";

interface BattleState {
  winner: Monster | null;
}

const initialState: BattleState = {
  winner: null,
};

export const battlesReducer = createReducer(initialState, (builder) => {
  builder.addCase(battle.fulfilled, (state, action) => ({
    ...state,
    winner: action.payload,
  }));

  builder.addCase(resetWinner, (state) => ({
    ...state,
    winner: null,
  }));
});
