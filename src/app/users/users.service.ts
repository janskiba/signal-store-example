import { Injectable } from '@angular/core';
import { Observable, of, throwError, delay } from 'rxjs';
import { MOCK_USERS, User } from './users.model';

@Injectable({ providedIn: 'root' })
export class UsersService {
    getUsers$(): Observable<User[]> {
        return of(MOCK_USERS).pipe(delay(400));
    }

    updateUser$(id: number, changes: Partial<Pick<User, 'name' | 'role'>>): Observable<User> {
        const existing = MOCK_USERS.find((u) => u.id === id);
        if (!existing) {
            return throwError(() => new Error(`User ${id} not found`));
        }
        return of({ ...existing, ...changes }).pipe(delay(300));
    }
}
