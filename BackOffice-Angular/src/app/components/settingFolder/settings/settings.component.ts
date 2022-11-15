import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CellClickedEvent, ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { SettingsService } from '../../../services/settings.service';
import { Settings } from '../../../interfaces/settings.interface';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
   
  routes: Settings[]=[];
  colDefs: ColDef[]=[
    {field: 'user'},
    {field: 'DarkMode'},
    {field: 'lenguage'},
    {field: 'letterSize'},
  ];

  defaultColDef: ColDef = {
    sortable: true, filter: true
  }


  constructor(private http: HttpClient, private router: Router,
    private settingsSrv: SettingsService) { }

  rowData$!:any;

  ngOnInit(): void{
    this.settingsSrv.getAll().subscribe(
      resp => {
        if(resp.status == 200){ 
      
          this.routes = resp.body!;
          this.rowData$=resp.body!.map(({user,darkMode,lenguage,letterSize})=>(
            {user,darkMode,lenguage,letterSize}));
          console.log(resp.body);
            }
      })
  }

  onCellClicked(event: CellClickedEvent){
    console.log(event);
    this.router.navigate(['/setting/',event.data._id])
  }

}
