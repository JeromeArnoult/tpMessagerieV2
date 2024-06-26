import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageUsersComponent } from './affichage-users.component';

describe('AffichageUsersComponent', () => {
  let component: AffichageUsersComponent;
  let fixture: ComponentFixture<AffichageUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AffichageUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AffichageUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
