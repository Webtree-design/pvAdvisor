import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  Inject,
  PLATFORM_ID,
} from '@angular/core';

@Component({
  selector: 'app-ueberuns',
  templateUrl: './ueberuns.component.html',
  styleUrls: ['./ueberuns.component.scss'],
})
export class UeberunsComponent {
  public ngStyle1: String = 'ngStyleBefore';
  public ngStyle2: String = 'ngStyleBefore';
  public ngStyle3: String = 'ngStyleBefore';
  private isBrowser: any;
  constructor(
    @Inject(PLATFORM_ID) platformId: string,
    private elementRef: ElementRef
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    this.checkElementViewportAnimation();
  }
  scroll2(el: HTMLElement) {
    if (this.isBrowser) {
      const elementTopPosition = el.getBoundingClientRect().bottom;

      window.scrollTo({
        top: window.pageYOffset + elementTopPosition - 90,
        behavior: 'smooth',
      });
    }
  }
  private async checkElementViewportAnimation() {
    const myElement = this.elementRef.nativeElement.querySelector('#animation');

    const bounding = myElement.getBoundingClientRect();

    if (bounding.top <= 850 && bounding.left >= 0) {
      this.ngStyle1 = 'ngStyleAfter';
      await this.delay(300);
      this.ngStyle2 = 'ngStyleAfter';
      await this.delay(300);
      this.ngStyle3 = 'ngStyleAfter';
      await this.delay(300);
    } else {
      this.ngStyle1 = 'ngStyleBefore';
      await this.delay(300);
      this.ngStyle2 = 'ngStyleBefore';
      await this.delay(300);
      this.ngStyle3 = 'ngStyleBefore';
      await this.delay(300);
    }
  }
  private async delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
