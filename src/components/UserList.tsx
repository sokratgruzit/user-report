import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks';
import { fetchUsers } from '../store/usersSlice';
import type { User } from '../types/User';

import UserCard from './UserCard';

import styles from './UserCard.module.css';
import loaderStyles from './Loader.module.css';

export default function UserList() {
    const { users, loading } = useAppSelector((state) => state.users);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUsers(''));
    }, [dispatch]);

    return (
        <div className={styles.cardItems}>
            {loading && (
                <div className={loaderStyles.loaderOverlay}>
                    <div className={loaderStyles.loader}></div>
                </div>
            )}

            {!loading &&
                users.map((user: User) => (
                    <UserCard key={user.id} user={user} />
                ))}
        </div>
    );
}
