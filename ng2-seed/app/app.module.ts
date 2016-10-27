/**
 * Created by urielmiranda on 03/10/16.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app/app.component'
import { InicioComponent } from '../app/inicio/inicio.component'
import { NosotrosComponent } from '../app/nosotros/nosotros.component'
import { routing, appRoutingProvides } from './app.routing'

@NgModule({
    imports: [ BrowserModule, routing ],
    declarations: [ AppComponent, InicioComponent, NosotrosComponent ],
    bootstrap: [AppComponent],
    providers: [appRoutingProvides]
})

export class AppModule { }
