export interface RocketsType {
  rockets: RocketData[];
}

interface RocketData {
  id: number;
  name: string;
}

export interface RocketType {
  rocket: {
    name: string;
    description: string;
  };
}
