import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseNodeComponent } from './response-node.component';

describe('DialogOptionNodeComponent', () => {
  let component: ResponseNodeComponent;
  let fixture: ComponentFixture<ResponseNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponseNodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
