/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyJokesComponent } from './my-jokes.component';

describe('MyJokesComponent', () => {
  let component: MyJokesComponent;
  let fixture: ComponentFixture<MyJokesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyJokesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
