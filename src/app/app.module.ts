import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent, AppComponent1, AppComponent3, } from './app.component';
import { ServerComponent } from './server/server.component';
import { EditUserComponent } from './edit-user/edit-user.component';


// import { HelloComponent } from './hello.component';
// import { ServerComponent } from './server.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,AppComponent1, EditUserComponent],
  bootstrap:    [ AppComponent,AppComponent1,ServerComponent, AppComponent3, EditUserComponent]
})
export class AppModule { 
  
}
