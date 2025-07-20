import { Routes } from '@angular/router';
import { FullscreenMapPageComponent } from './pages/fullscreen-map-page/fullscreen-map-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { HosesPageComponent } from './pages/hoses-page/hoses-page.component';

export const routes: Routes = [
  {
    path:'fullscreen',
    component:FullscreenMapPageComponent,
    title:'FullScreen Map'
  },
    {
    path:'markers',
    component:MarkersPageComponent,
    title:'Bookmarks'
  },
    {
    path:'houses',
    component:HosesPageComponent,
    title:'Available Properties'
  },
    {
    path:'**',
    redirectTo:'fullscreen'
  },
];
