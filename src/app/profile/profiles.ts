import {Profile} from "./profile";

export const PROFILES: Profile[] = [
  {
    self: true,
    id: 11,
    name: 'Mr. Nice',
    initials: 'MN',
    image: '../assets/images/mr_nice.jpg',
    active_competition_id: 0,
    steps: 4000,
    length_km: 40
  },
  {
    self: false,
    id: 12,
    name: 'Narco Monte',
    initials: 'NM',
    image: '../assets/images/narco_monte.jpg',
    active_competition_id: 1,
    steps: 3000,
    length_km: 30
  },
  {
    self: false,
    id: 13,
    name: 'Bombasto Tastic',
    initials: 'BT',
    image: '../assets/images/bombasto.jpg',
    active_competition_id: 1,
    steps: 50000,
    length_km: 500
  }
];
