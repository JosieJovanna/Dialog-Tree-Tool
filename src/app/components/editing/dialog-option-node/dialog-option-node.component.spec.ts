import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOptionNodeComponent } from './dialog-option-node.component';

describe('DialogOptionNodeComponent', () => {
  let component: DialogOptionNodeComponent;
  let fixture: ComponentFixture<DialogOptionNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogOptionNodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogOptionNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
