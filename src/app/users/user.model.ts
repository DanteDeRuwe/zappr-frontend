import { Series } from "../series/series.model";

export class User {
  constructor(email: string, password: string, fullName: string) {
    email = email;
    password = password;
    fullName = fullName;
  }
  id: number;
  fullName: string;
  email: string;
  password: string;
  favoriteSeries: Series[];
  ratedSeries: Series[];
  watchedEpisodes: any[]; //for now
  watchListedSeries: Series[];
}
