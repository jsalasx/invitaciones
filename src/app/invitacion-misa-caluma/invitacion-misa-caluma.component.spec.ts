import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitacionMisaCalumaComponent } from './invitacion-misa-caluma.component';

describe('InvitacionMisaCalumaComponent', () => {
  let component: InvitacionMisaCalumaComponent;
  let fixture: ComponentFixture<InvitacionMisaCalumaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvitacionMisaCalumaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvitacionMisaCalumaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
