import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'spa-scorer',
  templateUrl: './scorer.component.html',
  styleUrls: ['./scorer.component.css']
})
export class ScorerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  topScorers: number = 5;

}
