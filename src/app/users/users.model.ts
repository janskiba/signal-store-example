export type UserRole = 'admin' | 'editor' | 'viewer';

export interface User {
    id: number;
    name: string;
    role: UserRole;
}

export interface UsersState {
    users: User[];
    query: string;
    selectedRole: UserRole | null;
    loading: boolean;
    error: string | null;
    editingUserId: number | null;
}

export const initialState: UsersState = {
    users: [],
    query: '',
    selectedRole: null,
    loading: false,
    error: null,
    editingUserId: null,
};

export const MOCK_USERS: User[] = [
    { id: 1, name: 'Alice Johnson', role: 'admin' },
    { id: 2, name: 'Bob Smith', role: 'editor' },
    { id: 3, name: 'Carol White', role: 'viewer' },
    { id: 4, name: 'David Brown', role: 'editor' },
    { id: 5, name: 'Eve Davis', role: 'admin' },
    { id: 6, name: 'Frank Miller', role: 'viewer' },
    { id: 7, name: 'Grace Wilson', role: 'viewer' },
    { id: 8, name: 'Henry Moore', role: 'editor' },
];
