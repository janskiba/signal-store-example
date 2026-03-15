import { Component } from '@angular/core';
import { UsersFiltersComponent } from './components/users-filters.component';
import { UsersListComponent } from './components/users-list.component';

@Component({
    selector: 'app-users',
    imports: [UsersFiltersComponent, UsersListComponent],
    templateUrl: './users.component.html',
})
export class UsersComponent { }
