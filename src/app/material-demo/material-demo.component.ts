import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable, startWith, map } from 'rxjs';
import { ConfirmationComponent } from '../core/dialogs/confirmation/confirmation.component';

@Component({
  selector: 'app-material-demo',
  templateUrl: './material-demo.component.html',
  styleUrls: ['./material-demo.component.scss']
})
export class MaterialDemoComponent {

  constructor(private dialogService: MatDialog,
  ) {

  }


  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  openDialog() {

    const dialog = this.dialogService.open(ConfirmationComponent, {
      height: '400px',
      width: '600px',
      data: { title: 'Hello from material data' }
    });
    dialog.componentInstance.title = 'Hello from material demo';
    dialog.afterClosed().subscribe((res: string) => {
      console.log(res);
    })

  }

  onClose() {
    console.log('on close triggered')
  }

}
