import { Component, OnInit } from '@angular/core';
import {Params, ActivatedRoute} from "@angular/router";
import {CompetitionService} from "../competition.service";
import {ProfileService} from "../profile.service";
import {Competition} from "./competition";
import {Profile} from "../profile/profile";
import {MdDialog} from "@angular/material";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public competition: Competition;
  public highscore_profiles: Profile[];
  private active: boolean;
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

  constructor(private activatedRoute: ActivatedRoute, private cs: CompetitionService, private ps: ProfileService, public dialog: MdDialog) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params['id'];
      this.cs.getCompetition(id).then(data => {
        this.competition = data;
        this.ps.isActive(this.competition.id, data => {
          this.active = data;
        });
        this.ps.getActiveProfiles(this.competition.id, data => {
          this.highscore_profiles = data;
        });
        }
      );
    });
  }

  makeActive(){
    this.ps.setActive(this.competition.id);
  }

  addSteps(){
    if(this.active){
      this.dialog.open(DetailComponentDialog, {
        height: '400px',
        width: '280px'
      });
    }
  }

}

@Component({
  selector: 'app-detail-dialog',
  templateUrl: './detail-dialog.component.html'
})
export class DetailComponentDialog {}

