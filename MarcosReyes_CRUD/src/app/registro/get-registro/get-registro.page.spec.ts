import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetRegistroPage } from './get-registro.page';

describe('GetRegistroPage', () => {
  let component: GetRegistroPage;
  let fixture: ComponentFixture<GetRegistroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GetRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
