import { computed, inject } from '@angular/core';
import {
    patchState,
    signalStore,
    withComputed,
    withHooks,
    withMethods,
    withState,
} from '@ngrx/signals';
import { UsersService } from './users.service';
import { initialState, User, UserRole } from './users.model';

export const UsersStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withComputed((store) => ({
        filteredUsers: computed(() => {
            const query = store.query().toLowerCase().trim();
            const selectedRole = store.selectedRole();

            return store.users().filter((user) => {
                const matchesQuery = user.name.toLowerCase().includes(query);
                const matchesRole = selectedRole ? user.role === selectedRole : true;
                return matchesQuery && matchesRole;
            });
        }),
    })),
    withComputed((store) => ({
        filteredCount: computed(() => store.filteredUsers().length),
    })),
    withMethods((store) => {
        const usersService = inject(UsersService);
        return {
            setQuery(query: string) {
                patchState(store, { query });
            },
            setRole(role: UserRole | null) {
                patchState(store, { selectedRole: role });
            },
            resetFilters() {
                patchState(store, { query: '', selectedRole: null });
            },
            loadUsers() {
                patchState(store, { loading: true, error: null });
                usersService.getUsers$().subscribe({
                    next: (users: User[]) => patchState(store, { users, loading: false }),
                    error: (err: Error) =>
                        patchState(store, {
                            error: err?.message ?? 'Failed to load users',
                            loading: false,
                        }),
                });
            },
        };
    }),
    withHooks({
        onInit(store) {
            store.loadUsers();
        },
    })
);
