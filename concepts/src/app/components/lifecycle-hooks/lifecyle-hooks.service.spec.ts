import { TestBed } from '@angular/core/testing';

import { LifecyleHooksService } from './lifecyle-hooks.service';

describe('LifecyleHooksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LifecyleHooksService = TestBed.get(LifecyleHooksService);
    expect(service).toBeTruthy();
  });
});
