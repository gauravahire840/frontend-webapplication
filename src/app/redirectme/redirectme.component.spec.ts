import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectmeComponent } from './redirectme.component';

describe('RedirectmeComponent', () => {
  let component: RedirectmeComponent;
  let fixture: ComponentFixture<RedirectmeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedirectmeComponent]
    });
    fixture = TestBed.createComponent(RedirectmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
