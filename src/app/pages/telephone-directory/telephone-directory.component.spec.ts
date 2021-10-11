import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelephoneDirectoryComponent } from './telephone-directory.component';

describe('TelephoneDirectoryComponent', () => {
  let component: TelephoneDirectoryComponent;
  let fixture: ComponentFixture<TelephoneDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelephoneDirectoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelephoneDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
