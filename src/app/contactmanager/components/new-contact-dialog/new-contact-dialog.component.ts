import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../../models/user';

@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.scss']
})
export class NewContactDialogComponent implements OnInit {

  avatars = ['svg-1', 'svg-2', 'svg-3', 'svg-4'];
  user: User;

  constructor(private dialogRef: MatDialogRef<NewContactDialogComponent>) { }

  name = new FormControl('', [Validators.required])
  
  ngOnInit(): void {
    this.user = new User();
  }

  getErrorMessage() {
    return this.name.hasError('required') ? 'You must enter a name': '';
  }

  save() {
    this.dialogRef.close(this.user);
  }

  dismiss() {
    this.dialogRef.close(null);
  }

}
