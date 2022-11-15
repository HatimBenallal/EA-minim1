import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { SettingsService } from 'src/app/services/settings.service';
import { Settings } from '../../../interfaces/settings.interface';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-route',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class RouteComponent implements OnInit {

  settings!: Settings;
  //_id: String | null;
  constructor(private settingsSrv: SettingsService, private router: Router, private aRouter: ActivatedRoute, public dialog: MatDialog) {
    //this._id=this.aRouter.snapshot.paramMap.get('_id');
  }

  ngOnInit(): void {
    const data: any = this.aRouter.snapshot.data;
    if (data.routeData.status == 200) {
      this.settings = data.settingsData.body;
      console.log(data);
    }



  }
  deleteOne(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '500px',
      data: { _id: this.settings._id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.settingsSrv.deleteOne(this.settings._id).subscribe(
          response => {
            if (response.status == 200) {
              this.router.navigate(['/routes/']);
            }
          });
      }
    });
  }
}