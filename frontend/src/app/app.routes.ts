import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserFormComponent } from './user-form/user-form.component';

export const routes: Routes = [
    {
        path: '',component:UserComponent
    },
    {
        path: 'user',component:UserComponent
    },
    {
        path:'user/add', component:UserFormComponent
    },
    {
        path:'user/:id', component:UserFormComponent
    }
];
