import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateDataRegistroPage } from './create-data-registro.page';

describe('CreateDataRegistroPage', () => {
  let component: CreateDataRegistroPage;
  let fixture: ComponentFixture<CreateDataRegistroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateDataRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
