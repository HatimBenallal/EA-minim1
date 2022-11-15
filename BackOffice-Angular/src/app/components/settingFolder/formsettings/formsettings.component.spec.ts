import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsettingsComponent } from './formsettings.component';

describe('FormsettingsComponent', () => {
  let component: FormsettingsComponent;
  let fixture: ComponentFixture<FormsettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
