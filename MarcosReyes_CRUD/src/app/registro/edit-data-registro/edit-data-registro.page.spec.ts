import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditDataRegistroPage } from './edit-data-registro.page';

describe('EditDataRegistroPage', () => {
  let component: EditDataRegistroPage;
  let fixture: ComponentFixture<EditDataRegistroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditDataRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
