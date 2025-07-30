import { useState } from 'react';
import type { ChangeEvent } from 'react';
import { useAppDispatch } from '../hooks';
import { fetchUsers } from '../store/usersSlice';

export default function SearchBar() {
    const [term, setTerm] = useState('');
    const dispatch = useAppDispatch();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setTerm(value);
        dispatch(fetchUsers(value));
    };

    return (
        <input
            type="text"
            className="form-control mb-3"
            placeholder="Поиск по имени..."
            value={term}
            onChange={handleChange}
        />
    );
}
