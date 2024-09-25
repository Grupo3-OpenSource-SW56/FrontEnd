import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PlansComponent } from './plans/plans.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatList, MatListItem } from '@angular/material/list';
import { SummaryComponent } from './summary/summary.component';
import { PartnerComponent } from './partner/partner.component';
import { WorkersComponent } from './workers/workers.component';
import { ProfileComponent } from './profile/profile.component';
import {
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent,
} from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { AdminComponent } from './admin.component';
import { MatProgressBar } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AdminComponent,
    PlansComponent,
    SummaryComponent,
    PartnerComponent,
    WorkersComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatCheckbox,
    MatList,
    MatListItem,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
    MatToolbar,
    MatProgressBar,
  ],
  bootstrap: [AdminComponent],
})
export class AdminModule {}
