import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  campaigns = [] as any;
  form: FormGroup;
  successMessage = false;
  isModalOpen = false;
  index = 0;

  constructor() {
    this.form = new FormGroup({
      title: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required)
    });
  } 

  ngOnInit() {
    this.campaigns = JSON.parse(localStorage.getItem('campaigns') as any)
  }

  minus(index: number) {
    if (this.campaigns[index].score > 0) {
      this.campaigns[index].score--;
      localStorage.setItem('campaigns', JSON.stringify(this.campaigns))
    }
  }

  plus(index: number) {
    this.campaigns[index].score++;
    localStorage.setItem('campaigns', JSON.stringify(this.campaigns))
  }

  delete(index: number) {
    this.campaigns.splice(index, 1);
    localStorage.setItem('campaigns', JSON.stringify(this.campaigns))
  }

  edit(index: number) {
    this.index = index;
    this.isModalOpen = true;
    this.form.setValue({
      title: this.campaigns[index].title,
      description: this.campaigns[index].description
    })
  }

  closeModal(){
    this.isModalOpen = false;
  }

  save(){
    this.campaigns[this.index].title = this.form.get('title')?.value
    this.campaigns[this.index].description = this.form.get('description')?.value
    localStorage.setItem('campaigns', JSON.stringify(this.campaigns))
    this.index = 0;
    this.isModalOpen = false;
  }


}
