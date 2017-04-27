import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { MealsComponent } from './meals/meals.component';
import { MealStartComponent } from './meal-start/meal-start.component';
import {MealDetailComponent} from './meals/meal-detail/meal-detail.component';
const routes : Routes = [
{path: '', redirectTo: '/meals', pathMatch: 'full'},
{path: 'meals', component: MealsComponent, children: [
    {path: '', component: MealStartComponent },
    {path: ':id', component: MealDetailComponent }
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