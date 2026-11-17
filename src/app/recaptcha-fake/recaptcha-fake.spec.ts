import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecaptchaFake } from './recaptcha-fake';

describe('RecaptchaFake', () => {
  let component: RecaptchaFake;
  let fixture: ComponentFixture<RecaptchaFake>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecaptchaFake],
    }).compileComponents();

    fixture = TestBed.createComponent(RecaptchaFake);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
