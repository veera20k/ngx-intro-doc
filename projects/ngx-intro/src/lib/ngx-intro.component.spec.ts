import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxIntroComponent } from './ngx-intro.component';

describe('NgxIntroComponent', () => {
  let component: NgxIntroComponent;
  let fixture: ComponentFixture<NgxIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxIntroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
