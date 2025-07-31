import { useState, useEffect } from 'react';
import type { ChangeEvent } from 'react';
import { useAppDispatch } from '../hooks';
import { fetchUsers } from '../store/usersSlice';

import Svgs from './Svgs';
import styles from './SearchBar.module.css';

export default function SearchBar() {
    const [term, setTerm] = useState('');
    const dispatch = useAppDispatch();

    useEffect(() => {
        const timeout = setTimeout(() => {
            dispatch(fetchUsers(term));
        }, 800); 

        return () => clearTimeout(timeout); 
    }, [term, dispatch]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTerm(e.target.value);
    };

    return (
        <div className={`${styles.container} mb-4`}>
            <input
                type="text"
                className="form-control rounded-5 px-4 bg-transparent"
                style={{ borderColor: '#D4DEFE' }}
                value={term}
                onChange={handleChange}
            />
            <Svgs 
                svgName="search" 
                color="#432EAB" 
                styles={{ 
                    width: 24, 
                    height: 24,
                    position: 'absolute',
                    right: 17,
                    zIndex: -1,
                    top: 'calc(50% - 12px)'
                }} 
            />
        </div>
    );
}
