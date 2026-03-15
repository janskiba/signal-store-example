import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { MOCK_USERS, User } from './users.model';

@Injectable({ providedIn: 'root' })
export class UsersService {
    getUsers$(): Observable<User[]> {
        return of(MOCK_USERS).pipe(delay(400));
    }
}
