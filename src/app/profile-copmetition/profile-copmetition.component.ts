import {Component, OnInit, Input} from '@angular/core';
import {ProfileService} from "../profile.service";
import {Profile} from "../profile/profile";
import {Competition} from "../detail/competition";
import {CompetitionService} from "../competition.service";

@Component({
  selector: 'app-profile-copmetition',
  templateUrl: './profile-copmetition.component.html',
  styleUrls: ['./profile-copmetition.component.css']
})
export class ProfileCopmetitionComponent implements OnInit {
  @Input() competition_id: number;
  competition: Competition;
  constructor( private cs: CompetitionService) {
  }

  ngOnInit() {
    this.cs.getCompetition(this.competition_id).then(data => {
      this.competition = data;
      console.log(data);
    })
  }

}
