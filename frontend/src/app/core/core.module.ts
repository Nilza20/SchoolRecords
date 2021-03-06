import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { MessageService, ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';

import { ErrorHandlerService } from './error-handler.service';
import { CursosService } from '../cursos/cursos.service';
import { DisciplinasService } from '../disciplinas/disciplinas.service';
import { CategoriaService } from './../categorias/categoria.service';
import { NavbarComponent } from './navbar/navbar.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { FooterComponent } from './footer/footer.component';

registerLocaleData(localePt);

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    ToastModule,
    ConfirmDialogModule,
  ],
  declarations: [NavbarComponent, PaginaNaoEncontradaComponent, FooterComponent],
  exports: [
    NavbarComponent,
    ToastModule,
    ConfirmDialogModule,
    FooterComponent
  ],
  providers: [
    DisciplinasService,
    CursosService,
    CategoriaService,
    ErrorHandlerService,

    ConfirmationService,
    MessageService,
    Title,
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
})
export class CoreModule { }
