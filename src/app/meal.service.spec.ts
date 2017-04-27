import { TestBed, inject } from '@angular/core/testing';

import { MealService } from './meal.service';

describe('MealService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MealService]
    });
  });

  it('should ...', inject([MealService], (service: MealService) => {
    expect(service).toBeTruthy();
  }));
});
