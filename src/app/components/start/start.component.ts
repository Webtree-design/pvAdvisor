import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { flipAnimation } from 'src/app/core/flipcard';
import { ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
  animations: [flipAnimation],
})
export class StartComponent {
  public ngStyle1: String = 'ngStyleBefore';
  public ngStyle2: String = 'ngStyleBefore';
  public ngStyle3: String = 'ngStyleBefore';
  public priceButton: String = 'ngStyleBeforeSlide';

  public websiteKonfigurierenStep: number = 1;
  public websiteKonfigurierenStepMax: number = 4;

  public firstFormGroup!: FormGroup;
  public secondFormGroup!: FormGroup;
  public thirdFormGroup!: FormGroup;
  public lastFormGroup!: FormGroup;
  public firstSubmit: boolean = false;
  public secondSubmit: boolean = false;
  public thirdSubmit: boolean = false;
  public lastSubmit: boolean = false;

  public arrowAnimationState: any = 'active';
  private isBrowser: any;
  constructor(
    @Inject(PLATFORM_ID) platformId: string,
    private elementRef: ElementRef,
    private fb: FormBuilder,
    private meta: Meta
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  scroll(el: HTMLElement) {
    if (this.isBrowser) {
      const elementTopPosition = el.getBoundingClientRect().bottom;

      window.scrollTo({
        top: window.pageYOffset + elementTopPosition - 90,
        behavior: 'smooth',
      });
    }
  }

  @ViewChild('individualForm') individualForm!: NgForm;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    // this.checkElementViewportAnimation();
    this.checkElementViewportPriceButton();
  }

  ngOnInit() {
    this.meta.addTag({
      name: 'description',
      content: 'Webtree Design - plant your best website.',
    });
    this.firstFormGroup = this.fb.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this.fb.group({
      firstCtrl: ['', Validators.required],
    });
    this.thirdFormGroup = this.fb.group({
      firstCtrl: ['', ''],
    });
    this.lastFormGroup = this.fb.group({
      firstCtrl: ['', Validators.required],
    });
  }

  private async checkElementViewportPriceButton() {}

  flipOne: string = 'inactive';
  flipTwo: string = 'inactive';
  flipThree: string = 'inactive';

  disabledOne: boolean = false;
  disabledTwo: boolean = false;
  disabledThree: boolean = false;

  toggleFlipOne() {
    this.flipOne = this.flipOne == 'inactive' ? 'active' : 'inactive';
    this.flipTwo = 'inactive';
    this.flipThree = 'inactive';
  }
  toggleFlipTwo() {
    this.flipTwo = this.flipTwo == 'inactive' ? 'active' : 'inactive';
    this.flipOne = 'inactive';
    this.flipThree = 'inactive';
  }
  toggleFlipThree() {
    this.flipThree = this.flipThree == 'inactive' ? 'active' : 'inactive';
    this.flipTwo = 'inactive';
    this.flipOne = 'inactive';
  }
}
