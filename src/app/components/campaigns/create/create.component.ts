import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  campaigns = [] as any;
  form: FormGroup;
  successMessage = false;

  constructor() {
    this.form = new FormGroup({
      title: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
      score: new FormControl(0, Validators.required),
      date: new FormControl(new Date().toLocaleDateString(), Validators.required)
    });
  }

  submit() {
    if (localStorage.getItem('campaigns')) {
      this.campaigns = JSON.parse(localStorage.getItem('campaigns') as any)
    }
    this.campaigns.push({
      title: this.form.get('title')?.value,
      description: this.form.get('description')?.value,
      score: this.form.get('score')?.value,
      date: this.form.get('date')?.value
    })
    localStorage.setItem('campaigns', JSON.stringify(this.campaigns))
    this.successMessage = true;
    setTimeout(() => {
      this.successMessage = false;
    }, 2000);
  }

}
