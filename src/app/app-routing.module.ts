import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { MealsComponent } from './meals/meals.component';
import { MealStartComponent } from './meal-start/meal-start.component';
import {MealDetailComponent} from './meals/meal-detail/meal-detail.component';
import {NewMealComponent} from './new-meal/new-meal.component';
const routes : Routes = [
{path: '', redirectTo: '/meals', pathMatch: 'full'},
{path: 'meals', component: MealsComponent, children: [

    {path: '', component: MealStartComponent },
    {path: 'newmeal', component: NewMealComponent},
    {path: ':id', component: MealDetailComponent },
    {path: ':id/edit', component: NewMealComponent},
]}
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports : [
        RouterModule
    ]
})

export class AppRoutingModule {

}