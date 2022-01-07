import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.scss']
})
export class NewContactDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<NewContactDialogComponent>) { }

  ngOnInit(): void {
  }

  save() {
  }

  dismiss() {
    this.dialogRef.close();
  }

}
