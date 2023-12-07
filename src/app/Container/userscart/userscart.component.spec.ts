import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserscartComponent } from './userscart.component';

describe('UserscartComponent', () => {
  let component: UserscartComponent;
  let fixture: ComponentFixture<UserscartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserscartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserscartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
