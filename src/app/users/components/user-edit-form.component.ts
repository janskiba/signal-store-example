import { Component, inject, input, OnInit, signal } from '@angular/core';
import { form, FormField, required, schema, submit } from '@angular/forms/signals';
import { User, UserRole } from '../users.model';
import { UsersStore } from '../users.store';

@Component({
    selector: 'app-user-edit-form',
    imports: [FormField],
    templateUrl: './user-edit-form.component.html',
})
export class UserEditFormComponent implements OnInit {
    readonly user = input.required<User>();

    readonly store = inject(UsersStore);

    readonly roles: UserRole[] = ['admin', 'editor', 'viewer'];

    readonly model = signal<Pick<User, 'name' | 'role'>>({ name: '', role: 'viewer' });

    readonly fields = form(
        this.model,
        schema<Pick<User, 'name' | 'role'>>(({ name }) => {
            required(name);
        })
    );

    ngOnInit() {
        this.model.set({ name: this.user().name, role: this.user().role });
    }

    async submit() {
        await submit(this.fields, async () => {
            this.store.updateUser(this.user().id, this.model());
        });
    }

    cancel() {
        this.store.cancelEdit();
    }
}
