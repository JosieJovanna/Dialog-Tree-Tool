import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeActionButtonComponent } from './node-action-button.component';

describe('NodeActionButtonComponent', () => {
  let component: NodeActionButtonComponent;
  let fixture: ComponentFixture<NodeActionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeActionButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
