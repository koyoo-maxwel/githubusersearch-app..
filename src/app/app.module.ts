import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AppHeaderComponent } from './app-header/app-header.component';

import { GithubService } from './github.service';
import { UserCardComponent } from './user-card/user-card.component';
import { RepoCardComponent } from './repo-card/repo-card.component';
import { GithubSearchComponent } from './github-search/github-search.component';
import { KoyooComponent } from './koyoo/koyoo/koyoo.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    AppHeaderComponent,
    UserCardComponent,
    RepoCardComponent,
    GithubSearchComponent,
    KoyooComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
