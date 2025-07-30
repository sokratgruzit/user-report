import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks';
import { fetchUsers } from '../store/usersSlice';
import type { User } from '../types/User';

import UserCard from './UserCard';

export default function UserList() {
    const { users, loading } = useAppSelector((state) => state.users);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUsers(''));
    }, [dispatch]);

    return (
        <div>
            {loading && <p>Загрузка...</p>}
            {users.map((user: User) => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    );
}
