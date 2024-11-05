import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from "./public/pages/sign-in/sign-in.component";
import { ReposComponent } from "./public/pages/repos/repos.component";
import { ForumComponent } from "./public/pages/forum/forum.component";
import { MultimediaComponent } from "./public/pages/multimedia/multimedia.component";
import { SubscriptionsComponent } from "./public/pages/subscriptions/subscriptions.component";
import { UserAccountComponent } from "./public/pages/user-account/user-account.component";
import { HomeComponent } from "./public/pages/home/home.component";
import { SignUpComponent } from "./public/pages/sign-up/sign-up.component";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'repos', component: ReposComponent },
  { path: 'multimedia', component: MultimediaComponent },
  { path: 'subscriptions', component: SubscriptionsComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'account', component: UserAccountComponent },
  { path: 'signUp', component: SignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
