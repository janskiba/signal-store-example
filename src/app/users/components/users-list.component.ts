import { Component, inject } from '@angular/core';
import { UsersStore } from '../users.store';
import { UserItemComponent } from './user-item.component';
import { UserEditFormComponent } from './user-edit-form.component';

@Component({
    selector: 'app-users-list',
    imports: [UserItemComponent, UserEditFormComponent],
    templateUrl: './users-list.component.html',
})
export class UsersListComponent {
    readonly store = inject(UsersStore);
}
