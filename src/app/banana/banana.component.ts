import { Component, OnInit,signal } from '@angular/core';
import { State } from './state/banana.state';


@Component({
  selector: 'app-banana',
  templateUrl: './banana.component.html',
  styleUrl: './banana.component.css'
})
export class BananaComponent implements OnInit {
  banana = signal<State>({
    isPeeled: false,
    bitesRemaining: 10,
    color: 'yellow'
  });
  title = 'My NgRx Banana App';

    constructor() {

    }

    ngOnInit() {

    }

    newBanana() {

    }

    peelBanana() {

    }

    eatBanana() {

    }

    timeHop() {

    }

}
