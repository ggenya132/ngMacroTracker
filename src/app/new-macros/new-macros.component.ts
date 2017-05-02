import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {MacroService} from '../macro.service';
import {NgForm } from '@angular/forms';
import {Meal} from '../meal.model';
@Component({
  selector: 'app-new-macros',
  templateUrl: './new-macros.component.html',
  styleUrls: ['./new-macros.component.css']
})
export class NewMacrosComponent implements OnInit {

  @Output() closeMacros :EventEmitter<boolean> = new EventEmitter<boolean>();

  macrosSubmitted: boolean= false;

  constructor(private macroService: MacroService) {


   }

  ngOnInit() {
  }

  onSubmit(form: NgForm)  {
    this.macrosSubmitted = true;
    let trainingStatus  = form.value.macroProtocol;
    if(trainingStatus === 'training'){

    const protein = form.value.protein;
    const carbs = form.value.carbs;
    const fat  = form.value.fat;
    let newMeal = new Meal(protein, carbs, fat, name, "training", "");

      this.macroService.traingingMacros = newMeal;
    }

    else {

      const protein = form.value.protein;
      const carbs = form.value.carbs;
      const fat  = form.value.fat;
      let newMeal = new Meal(protein, carbs, fat, name, "resting", "");

        this.macroService.restingMacros = newMeal; 
    }

    console.log(this.macroService.traingingMacros)
    console.log(this.macroService.restingMacros)

  }

  onClick(){

    this.closeMacros.emit(false);

  }
}
