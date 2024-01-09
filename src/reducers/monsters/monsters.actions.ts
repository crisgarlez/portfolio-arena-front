import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Monster } from "../../models/monster.interface";
import { MonstersService } from "./monsters.service";

export const fetchMonstersData = createAsyncThunk<Monster[]>(
  "monsters/fetchMonstersData",
  MonstersService.getAll
);

export const setSelectedMonster = createAction<Monster | null>(
  "monsters/setSelectedMonster"
);

export const getRandomMonster = createAction("monsters/getRandomMonster");
