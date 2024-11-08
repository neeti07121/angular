import { Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { contentChild } from '@angular/core';

export const routes: Routes = [
    { path: 'home', component: ContentComponent, data:{title:'Home', content:'Welcome to the Home Page'}},
    { path: 'education', component: ContentComponent, data:{title:'Education',content:'Welcome to the Education Page'} },
    { path: 'contact', component: ContentComponent, data:{title:'Contact', content:'Welcome to the Contact Page'} },
    { path: 'experience', component: ContentComponent, data:{title:'Experience',content:'Welcome to the Experience Page'}}


];
