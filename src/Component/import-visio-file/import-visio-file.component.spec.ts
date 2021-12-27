import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportVisioFileComponent } from './import-visio-file.component';

describe('ImportVisioFileComponent', () => {
  let component: ImportVisioFileComponent;
  let fixture: ComponentFixture<ImportVisioFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportVisioFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportVisioFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
