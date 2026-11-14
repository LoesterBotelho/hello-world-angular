import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Nomes } from './nomes';

describe('Nomes', () => {
  let component: Nomes;
  let fixture: ComponentFixture<Nomes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nomes],
    }).compileComponents();

    fixture = TestBed.createComponent(Nomes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
