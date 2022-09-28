import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableCkEditorComponent } from './editable-ck-editor.component';

describe('EditableCkEditorComponent', () => {
  let component: EditableCkEditorComponent;
  let fixture: ComponentFixture<EditableCkEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditableCkEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditableCkEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
