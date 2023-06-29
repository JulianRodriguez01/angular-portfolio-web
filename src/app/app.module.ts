import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BigTextComponent } from './components/big-text/big-text.component';
import { FooterComponent } from './components/footer/footer.component';
import { BoxButtonComponent } from './components/box-button/box-button.component';
import { CardProyectComponent } from './components/rigth-card-proyect/card-proyect.component';
import { LeftCardProyectComponent } from './components/left-card-proyect/left-card-proyect.component';
import { TableComponent } from './components/table/table.component';
import { CircleImageComponent } from './components/circle-image/circle-image.component';
import { TitleProjectComponent } from './components/title-project/title-project.component';
import { SubtitleComponent } from './components/subtitle/subtitle.component';
import { OvalImageComponent } from './components/oval-image/oval-image.component';
import { MediumTextComponent } from './components/medium-text/medium-text.component';
import { TextIcelandComponent } from './components/text-iceland/text-iceland.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BigTextComponent,
    FooterComponent,
    BoxButtonComponent,
    CardProyectComponent,
    LeftCardProyectComponent,
    TableComponent,
    CircleImageComponent,
    TitleProjectComponent,
    SubtitleComponent,
    OvalImageComponent,
    MediumTextComponent,
    TextIcelandComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
