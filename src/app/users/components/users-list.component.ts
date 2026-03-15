import { Component, inject } from '@angular/core';
import { UsersStore } from '../users.store';
import { UserItemComponent } from './user-item.component';

@Component({
    selector: 'app-users-list',
    imports: [UserItemComponent],
    templateUrl: './users-list.component.html',
})
export class UsersListComponent {
    readonly store = inject(UsersStore);
}
