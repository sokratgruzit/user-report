export interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
}

export interface UsersState {
    users: User[];
    selectedUser: User | null;
    loading: boolean;
}

export interface AxiosResponse {
    data: User[];
    success: boolean;
}
