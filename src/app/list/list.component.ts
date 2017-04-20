import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../profile.service";
import {CompetitionService} from "../competition.service";
import {Competition} from "../detail/competition";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  competitions: Competition[];

  constructor(private cs: CompetitionService) {
    this.cs.getCompetitions().then(data => {
      this.competitions = data;
    })
  }

  ngOnInit() {

  }

}
