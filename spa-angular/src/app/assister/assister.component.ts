import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'spa-assister',
  templateUrl: './assister.component.html',
  styleUrls: ['./assister.component.css']
})
export class AssisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  topAssisters: number = 5;
}
