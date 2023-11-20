import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  url: string = environment.dbUrl;
  constructor() {}

  async getAllHouseLocations(): Promise<HousingLocation[]> {
    const data: Response = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(
    id: number
  ): Promise<HousingLocation | undefined> {
    const data: Response = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
