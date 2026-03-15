import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersStore } from '../users.store';
import { UserRole } from '../users.model';

@Component({
    selector: 'app-users-filters',
    imports: [FormsModule],
    templateUrl: './users-filters.component.html',
})
export class UsersFiltersComponent {
    readonly store = inject(UsersStore);

    readonly roles: (UserRole | null)[] = [null, 'admin', 'editor', 'viewer'];

    roleLabel(role: UserRole | null): string {
        return role ?? 'All';
    }
}
