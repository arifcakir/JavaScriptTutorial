# Cmd ile attaki komutla kurulum yapılır

    npm install –g typescript

    tsc –v denilirse typescript compiler versiyonu görülebilir
    tsc –watch filename canlı compile yapılabilir

# Angular CLI

    Npm install –g @angular/cli      son sürümü indirir
    Ng new projectname    yeni proje oluşturuyor

## Projeyi çalıştırmak
Proje klasöründeyken
    
    ng serve     

denilirse browserdan proje yayına başlar. Ancak browser açılmaz http://localhost:4200 den yayına başlar
direk başlatacak komut

    ng serve –open

## Build almak

proje klasöründeyken 

    ng build 
  
dersek projeyi build eder. Ancak bu hali build hali production değil. 
  
Production Build için 

    ng build –prod    

yazmamız lazım
  
## Component eklemek için

    Ng g c People
    
bu ise template dosyalarını oluşturmaz inline template ve css oluşturur. Yani internal template ve style

    Ng g c –it –is   

Yazılan service öncelikle appmopdule içine eklenmeli

    import { UsersService } from './UsersService';

daha sonra provider a eklenmeli

    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';
    import { UsersService } from './UsersService';

    @NgModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule
      ],
      providers: [UsersService],
      bootstrap: [AppComponent]
    })
    export class AppModule { }

daha sonra bu servisi kullanacağımız yerde örneğin app.component.ts içinde import etmemiz gerekiyor.

## Diective oluşturmak için

Directive ler html ile pipe lar data ile ilgilidir. Heryerde değişikliği direcive ile pipe ile sayfadaki aynı data dan birini farklı birini daha farklı filtre uygulayabiliriz.

    Ng g d Highlight

Komut satırıyla eklediğimiz için modüle kısmında ekleme yapmamıza gerek yok.
  
## Service oluşturmak için

    Ng g s Highlight

## Pipe oluşturmak için

    Ng g p PipeName

Json okumak için HttpClient ve HttpClientModule modules e eklenir
  
