import { Injectable } from '@angular/core';
import {Competition} from "./detail/competition";
import {COMPETITIONS} from "./detail/competition_list";

@Injectable()
export class CompetitionService {

  public getCompetitions(): Promise<Competition[]>{
    return Promise.resolve(COMPETITIONS);
  }

  public getCompetition(id): Promise<Competition>{
    return Promise.resolve(COMPETITIONS.find(data => data.id == id));
  }
}
