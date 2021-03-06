import { ContactService } from './../services/contact.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  FormData: FormGroup;
  constructor(
    private builder: FormBuilder, 
    private contact: ContactService
  ) { }

  onSubmit(FormData) {
    this.contact.postMessage(FormData).subscribe(response => {
      location.href = 'https://mailthis.to/confirm'
    }, error => {
      console.warn(error.responseText)
      console.log({ error })
    })
  }
  ngOnInit(): void {
    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      Message: new FormControl('', [Validators.required])
    })
  }

}
