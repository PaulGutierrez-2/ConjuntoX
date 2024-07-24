import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncorrectBoxComponent } from './incorrect-box.component';

describe('IncorrectBoxComponent', () => {
  let component: IncorrectBoxComponent;
  let fixture: ComponentFixture<IncorrectBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncorrectBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncorrectBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
