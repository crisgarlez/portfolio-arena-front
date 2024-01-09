import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { BattlesService } from "./battles.service";

export const battle = createAsyncThunk(
  "monsters/battle",
  async (payload: any) => {
    return await BattlesService.battle(payload?.monsterA, payload?.monsterB);
  }
);

export const resetWinner = createAction("monsters/setWinner");
