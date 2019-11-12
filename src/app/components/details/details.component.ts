import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


  constructor(private routes: ActivatedRoute) { }

  ngOnInit() {
    this.routes.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      console.log(id);

    });
  }

}
