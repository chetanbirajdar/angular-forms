import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent {
  constructor(private dialogService: MatDialogRef<ConfirmationComponent>,

    @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  title: string;
  message: string;

  closeDialog() {

    this.dialogService.close('user clicked ok');
  }

}
