import { TestBed, inject } from '@angular/core/testing';

import { MacroService } from './macro.service';

describe('MacroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MacroService]
    });
  });

  it('should ...', inject([MacroService], (service: MacroService) => {
    expect(service).toBeTruthy();
  }));
});
