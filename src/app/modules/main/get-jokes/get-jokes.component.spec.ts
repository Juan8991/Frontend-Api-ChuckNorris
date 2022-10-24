/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GetJokesComponent } from './get-jokes.component';

describe('GetJokesComponent', () => {
  let component: GetJokesComponent;
  let fixture: ComponentFixture<GetJokesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetJokesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
