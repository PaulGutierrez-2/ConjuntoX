import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeTheoryComponent } from './se-theory.component';

describe('SeTheoryComponent', () => {
  let component: SeTheoryComponent;
  let fixture: ComponentFixture<SeTheoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeTheoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeTheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
