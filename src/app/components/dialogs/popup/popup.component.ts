import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { Dialog, DialogModule, DialogRef } from '@angular/cdk/dialog';
import { popupAnimation } from '../../../core/message';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  animations: [popupAnimation],
})
export class PopupComponent {
  public item: any;
  constructor(
    @Inject(DIALOG_DATA) public data: DialogRef,
    public dialogRef: DialogRef<PopupComponent>
  ) {
    this.item = data;
  }
}
