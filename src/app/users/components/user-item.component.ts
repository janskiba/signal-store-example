import { Component, input } from '@angular/core';
import { User } from '../users.model';

@Component({
    selector: 'app-user-item',
    templateUrl: './user-item.component.html',
})
export class UserItemComponent {
    readonly user = input.required<User>();
}
