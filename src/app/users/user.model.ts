import { Series } from "../series/series.model";

export interface User {
  id: number;
  fullName: string;
  email: string;
  favoriteSeries: Series[];
  ratedSeries: Series[];
  watchedEpisodes: any[]; //for now
  watchListedSeries: Series[];
}
