import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { docResolver } from './doc.resolver';

describe('docResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => docResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
