import { Component, inject, input } from '@angular/core';
import { User, UserRole } from '../users.model';
import { UsersStore } from '../users.store';

const ROLE_CLASSES: Record<UserRole, string> = {
    admin: 'bg-purple-100 text-purple-700',
    editor: 'bg-blue-100 text-blue-700',
    viewer: 'bg-gray-100 text-gray-600',
};

@Component({
    selector: 'app-user-item',
    templateUrl: './user-item.component.html',
})
export class UserItemComponent {
    readonly user = input.required<User>();
    readonly store = inject(UsersStore);

    roleBadgeClass(role: UserRole): string {
        return ROLE_CLASSES[role];
    }
}
