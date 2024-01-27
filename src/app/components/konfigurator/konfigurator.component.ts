import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-konfigurator',
  templateUrl: './konfigurator.component.html',
  styleUrls: ['./konfigurator.component.scss'],
})
export class KonfiguratorComponent {
  showSpinner = true;

  public progress: number;
  public steps: number = 9;
  public form: FormData = {
    Wo: '',
    Wie: '',
    Suedlich: '',
    Flaeche: '',
    kaufenMieten: '',
    stromspeicher: '',
    dachalter: '',
    plz: '',
    kontakt: {
      name: '',
      email: '',
      tel: '',
    },
  };
  constructor(private _formBuilder: FormBuilder) {
    this.progress = 0;
  }

  firstFormGroup = this._formBuilder.group({
    selectedOption: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    selectedOption: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    selectedOption: ['', Validators.required],
  });
  fourFormGroup = this._formBuilder.group({
    selectedOption: ['', Validators.required],
  });
  fiveFormGroup = this._formBuilder.group({
    selectedOption: ['', Validators.required],
  });
  sixFormGroup = this._formBuilder.group({
    selectedOption: ['', Validators.required],
  });
  sevenFormGroup = this._formBuilder.group({
    selectedOption: ['', Validators.required],
  });
  eightFormGroup = this._formBuilder.group({
    selectedOption: ['', [Validators.required, Validators.minLength(4)]],
  });
  nineFormGroup = this._formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    tel: ['', [Validators.required, Validators.minLength(5)]],
    box: [false, Validators.required],
  });

  Next(stepper: any) {
    const index = stepper._selectedIndex;
    console.log(index);

    this.progress = (index / this.steps) * 100;
    if (stepper._selectedIndex == 8) {
      setTimeout(() => {
        this.showSpinner = false;
      }, 3000);
    }
  }
  Back(stepper: any) {
    const index = stepper._selectedIndex;
    this.progress = (index / this.steps) * 100;
  }

  Senden() {
    if (this.nineFormGroup.valid) {
      this.form.Wo = '123';
      console.log(this.form);

      const oneOption = this.firstFormGroup.get('selectedOption')!.value;
      const twoOption = this.secondFormGroup.get('selectedOption')!.value;
      const threeOption = this.thirdFormGroup.get('selectedOption')!.value;
      const fourOption = this.fourFormGroup.get('selectedOption')!.value;
      const fiveOption = this.fiveFormGroup.get('selectedOption')!.value;
      const sixOption = this.sixFormGroup.get('selectedOption')!.value;
      const sevenOption = this.sevenFormGroup.get('selectedOption')!.value;
      const eightOption = this.eightFormGroup.get('selectedOption')!.value;

      const nineOptionName = this.nineFormGroup.get('name')!.value;
      const nineOptionTel = this.nineFormGroup.get('tel')!.value;
      const nineOptionEmail = this.nineFormGroup.get('email')!.value;
      const nineOptionBox = this.nineFormGroup.get('box')!.value;

      console.log(oneOption);
      console.log(twoOption);
      console.log(threeOption);
      console.log(fourOption);
      console.log(fiveOption);
      console.log(sixOption);
      console.log(sevenOption);
      console.log(eightOption);
      console.log(nineOptionName);
      console.log(nineOptionTel);
      console.log(nineOptionEmail);
      console.log(nineOptionBox);
    }
  }
}

interface FormData {
  Wo: string;
  Wie: string;
  Suedlich: string;
  Flaeche: string;
  kaufenMieten: string;
  stromspeicher: string;
  dachalter: string;
  plz: string;
  kontakt: {
    name: string;
    email: string;
    tel: string;
  };
}
