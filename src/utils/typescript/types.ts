export interface RocketsType {
  rockets: RocketData[];
}

interface RocketData {
  id: number;
  name: string;
}

export interface RocketType {
  rocket: RocketSingleData[];
}

interface RocketSingleData {
  name: string;
  description: string;
}
