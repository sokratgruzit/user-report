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
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content rounded-4 p-4">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4 className="mb-0 fw-bold">{user.name}</h4>
                            <button className="btn-close" onClick={handleClose}></button>
                        </div>
                        <p className="text-secondary mb-1">Email: {user.email}</p>
                        <p className="text-secondary mb-1">Телефон: {user.phone}</p>
                        <p className="text-secondary">Адрес: {user.address}</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
