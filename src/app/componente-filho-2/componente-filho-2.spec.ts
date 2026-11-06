import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponenteFilho2 } from './componente-filho-2';

describe('ComponenteFilho2', () => {
  let component: ComponenteFilho2;
  let fixture: ComponentFixture<ComponenteFilho2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteFilho2],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponenteFilho2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
