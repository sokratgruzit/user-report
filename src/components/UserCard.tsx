import type { User } from '../types/User';
import { useAppDispatch } from '../hooks';
import { setSelectedUser } from '../store/usersSlice';

import Svgs from './Svgs';

import styles from "./UserCard.module.css";

export default function UserCard({ user }: { user: User }) {
    const dispatch = useAppDispatch();
    return (
        <div
            className={`rounded-4 p-3 ${styles.cardItem}`}
            onClick={() => dispatch(setSelectedUser(user))}
        >
            <h5 className="mb-3 fw-bold text-dark">{user.name}</h5>
            <div className={`${styles.contentItem} mb-2`}>
                <Svgs svgName="phone" color="#432EAB" styles={{ width: 24, height: 24 }} />
                <p className="mb-0 text-secondary small">{user.phone}</p>
            </div>
            <div className={styles.contentItem}>
                <Svgs svgName="email" color="#432EAB" styles={{ width: 24, height: 24 }} />
                <p className="mb-0 text-secondary small">{user.email}</p>
            </div>
        </div>
    );
}
