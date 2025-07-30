import type { User } from '../types/User';
import { useAppDispatch } from '../hooks';
import { setSelectedUser } from '../store/usersSlice';

import Svgs from './Svgs';

export default function UserCard({ user }: { user: User }) {
    const dispatch = useAppDispatch();
    return (
        <div
            className="card shadow-sm rounded-3 p-3 mb-3"
            style={{ width: '336px', height: '96px', cursor: 'pointer' }}
            onClick={() => dispatch(setSelectedUser(user))}
        >
            <h5 className="mb-1 fw-bold text-dark">{user.name}</h5>
            <p className="mb-0 text-secondary small">{user.email}</p>
            <Svgs svgName="phone" color="#432EAB" styles={{ width: 24, height: 24 }} />
            <p className="mb-0 text-secondary small">{user.phone}</p>
        </div>
    );
}
