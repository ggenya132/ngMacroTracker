import { Component, OnInit } from '@angular/core';
import { MealService } from '../../meal.service'
import { Meal} from '../../meal.model';

@Component({
  selector: 'app-meal-detail',
  templateUrl: './meal-detail.component.html',
  styleUrls: ['./meal-detail.component.css']
})
export class MealDetailComponent implements OnInit {

  meal: Meal;

  constructor(private mealService: MealService) { }

  ngOnInit() {
    this.meal = this.mealService.getMeal(1);
  }

}
