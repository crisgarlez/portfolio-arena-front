import { Monster } from "../../models/monster.interface";

const API_URL = "http://localhost:3000";

const getAll = async (): Promise<Monster[]> =>
  await fetch(`${API_URL}/monsters`).then((response) => response.json());

export const MonstersService = {
  getAll,
};
