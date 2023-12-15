export type CharacterAPIRest = {
    id: number;
    name: string;
    episode: string[];

  };
  

  export type EpisodeAPIRest = {
    id: number;
    name: string;
    characters: string[];
 
  };