import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitacionMisaComponent } from './invitacion-misa.component';

describe('InvitacionMisaComponent', () => {
  let component: InvitacionMisaComponent;
  let fixture: ComponentFixture<InvitacionMisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvitacionMisaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvitacionMisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
