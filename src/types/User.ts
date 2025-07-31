export interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    hire_date: string;
    position_name: string;
    department: string;
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
