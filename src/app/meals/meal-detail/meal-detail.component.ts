import { Component, OnInit } from '@angular/core';
import { MealService } from '../../meal.service'
import { Meal} from '../../meal.model';
import {Router, ActivatedRoute, Params} from'@angular/router'
@Component({
  selector: 'app-meal-detail',
  templateUrl: './meal-detail.component.html',
  styleUrls: ['./meal-detail.component.css']
})
export class MealDetailComponent implements OnInit {
  id : number;
  meal: Meal;

  constructor(private mealService: MealService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    
    this.activatedRoute.params.subscribe((param: Params)=>{
      this.id = param['id'];
      this.meal = this.mealService.getMeal(param['id'])
    })
    this.meal = this.mealService.getMeal(this.activatedRoute.snapshot.params['id']);
    
  }

  onEditMeal(){
        console.log("hello");
        this.router.navigate(['edit'], {relativeTo: this.activatedRoute})

  }

}
