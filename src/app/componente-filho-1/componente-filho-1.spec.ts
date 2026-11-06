import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponenteFilho1 } from './componente-filho-1';

describe('ComponenteFilho1', () => {
  let component: ComponenteFilho1;
  let fixture: ComponentFixture<ComponenteFilho1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteFilho1],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponenteFilho1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
