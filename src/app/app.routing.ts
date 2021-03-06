import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { IndexComponent } from './index/index.component'; 
import { FormComponent } from './form/form.component';

const appRoutes: Routes = [
    {path:'index', component: IndexComponent},
    {
        path:'admin', 
        component: AdminComponent,
        children:[
            {
                path: ':form',
                component: FormComponent
            }
        ]
    },
    {path:'', component:IndexComponent},
    {path:'**', component:IndexComponent}
] 

export const appRoutingProviders:   any[] = [

];

// HashLocationStrategy
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });