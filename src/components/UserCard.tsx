import type { User } from '../types/User';
import { useAppDispatch } from '../hooks';
import { setSelectedUser } from '../store/usersSlice';

export default function UserCard({ user }: { user: User }) {
    const dispatch = useAppDispatch();
    return (
        <div
            className="card mb-2 cursor-pointer"
            onClick={() => dispatch(setSelectedUser(user))}
        >
            <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">{user.email}</p>
            </div>
        </div>
    );
}
