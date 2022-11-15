import { Component, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Settings } from 'src/app/interfaces/settings.interface';
import { User } from 'src/app/interfaces/user.interface';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-formsettings',
  templateUrl: './formsettings.component.html',
  styleUrls: ['./formsettings.component.css']
})
export class FormsettingsComponent implements OnInit {
  user!: User;
  message!: String;
  subscription!: Subscription;
  settings!: Settings;

  constructor(private settingsSrv: SettingsService) { }
  

 
  settingsForm = new FormGroup({
    user: new FormControl('', Validators.required),
    darkMode: new FormControl('', Validators.required),
    letterSize: new FormControl('', Validators.required),
    lenguage: new FormControl('', Validators.required)
     
  })
  

  ngOnInit(): void {
  }
  

  onSubmit(){
    
    const SettingsParams: Settings = <Settings><unknown>this.settingsForm.value;
    this.settingsSrv.addOne(SettingsParams).subscribe(
      response => {
        if(response.status == 200){
          //this.routeSrv.newUserLogged(response.body!);
          this.settings.navigate(['/settings']);
        }
      }); 
  }
}
