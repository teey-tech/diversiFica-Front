import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ɵInternalFormsSharedModule } from '@angular/forms'
import { HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { OrderModule } from 'ngx-order-pipe';
import localept from '@angular/common/locales/pt';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { EntrarComponent } from './entrar/entrar.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { TermosComponent } from './termos/termos.component';
import { InicioComponent } from './inicio/inicio.component';
import { AlertasComponent } from './alertas/alertas.component';
import { VagasPfComponent } from './vagas-pf/vagas-pf.component';
import { VagasPjComponent } from './vagas-pj/vagas-pj.component';
import { UsuariosPfComponent } from './usuarios-pf/usuarios-pf.component';
import { ProjetoComponent } from './projeto/projeto.component';
import { VagaDeleteComponent } from './delete/vaga-delete/vaga-delete.component';
import { VagaEditComponent } from './edit/vaga-edit/vaga-edit.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { EsqueceuComponent } from './esqueceu/esqueceu.component';


registerLocaleData(localept, 'pt');
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EntrarComponent,
    SobreComponent,
    ContatoComponent,
    RodapeComponent,
    CadastrarComponent,
    TermosComponent,
    InicioComponent,
    AlertasComponent,
    VagasPfComponent,
    VagasPjComponent,
    UsuariosPfComponent,
    ProjetoComponent,
    VagaDeleteComponent,
    VagaEditComponent,
    NotFoundComponent,
    UsuarioEditComponent,
    EsqueceuComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    OrderModule,
    ɵInternalFormsSharedModule,
    AppRoutingModule,
    CurrencyMaskModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useClass: HashLocationStrategy,
    useValue: 'pt'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
