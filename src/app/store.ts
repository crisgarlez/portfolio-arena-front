import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { monstersReducer } from "../reducers/monsters/monsters.reducer";
import { battlesReducer } from "../reducers/battle/battles.reducer";

export const store = configureStore({
  reducer: {
    monsters: monstersReducer,
    battle: battlesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
