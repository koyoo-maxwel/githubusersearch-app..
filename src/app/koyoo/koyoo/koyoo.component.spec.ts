import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KoyooComponent } from './koyoo.component';

describe('KoyooComponent', () => {
  let component: KoyooComponent;
  let fixture: ComponentFixture<KoyooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoyooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KoyooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
