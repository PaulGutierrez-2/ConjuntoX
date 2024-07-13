import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymmetricDifferenceComponent } from './symmetric-difference.component';

describe('SymmetricDifferenceComponent', () => {
  let component: SymmetricDifferenceComponent;
  let fixture: ComponentFixture<SymmetricDifferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SymmetricDifferenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SymmetricDifferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
