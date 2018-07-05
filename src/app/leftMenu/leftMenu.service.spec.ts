/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LeftMenuService } from './leftMenu.service';

describe('Service: LeftMenu', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeftMenuService]
    });
  });

  it('should ...', inject([LeftMenuService], (service: LeftMenuService) => {
    expect(service).toBeTruthy();
  }));
});
