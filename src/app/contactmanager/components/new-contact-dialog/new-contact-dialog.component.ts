import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.scss']
})
export class NewContactDialogComponent implements OnInit {

  avatars = ['svg-1', 'svg-2', 'svg-3', 'svg-4'];
  user: User;
  contactManagerForm!: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<NewContactDialogComponent>,
    private userService: UserService,
    private formBuilder: FormBuilder) { }

  name = new FormControl('', [Validators.required])
  
  ngOnInit(): void {
    this.user = new User();    

    this.contactManagerForm = this.formBuilder.group({
      avatar: ['', Validators.required],
      name: ['', Validators.required],
      birthDate: ['', Validators.required],
      bio: ['', Validators.required]
    })

  }

  getErrorMessage() {
    return this.name.hasError('required') ? 'You must enter a name': '';
  }

  save() {
    // todo: perform validation, use reactiveformsmodule
    this.user.name = this.contactManagerForm.controls.name.value;
    this.user.avatar = this.contactManagerForm.controls.avatar.value;    
    this.user.birthDate = this.contactManagerForm.controls.birthDate.value;
    this.user.bio = this.contactManagerForm.controls.bio.value;

    this.userService.addUser(this.user).then(user=> {
      this.dialogRef.close(user);
    })
    
  }

  dismiss() {
    this.dialogRef.close(null);
  }

}
