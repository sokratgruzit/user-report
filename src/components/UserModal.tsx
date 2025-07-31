import { useAppDispatch, useAppSelector } from '../hooks';
import { clearSelectedUser } from '../store/usersSlice';
import { motion } from 'framer-motion';

import styles from './UserModal.module.css';

export default function UserModal() {
    const user = useAppSelector((state) => state.users.selectedUser);
    const dispatch = useAppDispatch();

    if (!user) return null;

    const handleClose = () => dispatch(clearSelectedUser());

    return (
        <div className={styles.backdrop} onClick={handleClose}>
            <motion.div
                className={styles.modal}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles.modalContent}>
                    <div className={styles.modalHeader}>
                        <h4>{user.name}</h4>
                        <button className="btn-close" onClick={handleClose}></button>
                    </div>

                    <div className={styles.row}>
                        <span className={styles.label}>Телефон:</span>
                        <span className={styles.value}>{user.phone}</span>
                    </div>
                    <div className={styles.row}>
                        <span className={styles.label}>Почта:</span>
                        <span className={styles.value}>{user.email}</span>
                    </div>
                    <div className={styles.row}>
                        <span className={styles.label}>Адрес:</span>
                        <span className={styles.value}>{user.address}</span>
                    </div>
                    <div className={styles.row}>
                        <span className={styles.label}>Дата приема:</span>
                        <span className={styles.value}>{user.hire_date}</span>
                    </div>
                    <div className={styles.row}>
                        <span className={styles.label}>Подразделение:</span>
                        <span className={styles.value}>{user.department}</span>
                    </div>
                    <div className={styles.lastRow}>
                        <span className={styles.lastRowLabel}>Дополнительная информация:</span>
                        <span className={styles.lastRowValue}>Разработчики используют текст в качестве заполнителя макта страницы. Разработчики используют текст в качестве заполнителя макта страницы.</span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
