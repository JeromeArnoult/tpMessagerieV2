import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageMessagesComponent } from './affichage-messages.component';

describe('AffichageMessagesComponent', () => {
  let component: AffichageMessagesComponent;
  let fixture: ComponentFixture<AffichageMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AffichageMessagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AffichageMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
