import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlansComponent } from './plans/plans.component';
import { SummaryComponent } from './summary/summary.component';
import { PartnerComponent } from './partner/partner.component';
import { WorkersComponent } from './workers/workers.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  { path: 'plans', component: PlansComponent },
  
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'summary', component: SummaryComponent },
      { path: 'partner', component: PartnerComponent },
      { path: 'workers', component: WorkersComponent },
      { path: 'profile', component: ProfileComponent },
      { path: '', redirectTo: 'summary', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
