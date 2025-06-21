import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatePanelComponent } from './donate-panel.component';

describe('DonatePanelComponent', () => {
  let component: DonatePanelComponent;
  let fixture: ComponentFixture<DonatePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonatePanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DonatePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
