import { useAppDispatch, useAppSelector } from '../hooks';
import { clearSelectedUser } from '../store/usersSlice';
import { motion } from 'framer-motion';

export default function UserModal() {
    const user = useAppSelector((state) => state.users.selectedUser);
    const dispatch = useAppDispatch();

    if (!user) return null;

    const handleClose = () => dispatch(clearSelectedUser());

    return (
        <div className="modal-backdrop show" onClick={handleClose}>
            <motion.div
                className="modal d-block"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title">{user.name}</h5>
                        <button className="btn-close" onClick={handleClose}></button>
                        </div>
                        <div className="modal-body">
                        <p>Email: {user.email}</p>
                        <p>Phone: {user.phone}</p>
                        <p>Address: {user.address}</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
