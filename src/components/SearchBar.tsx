import { useState } from 'react';
import type { ChangeEvent } from 'react';
import { useAppDispatch } from '../hooks';
import { fetchUsers } from '../store/usersSlice';

import Svgs from './Svgs';

export default function SearchBar() {
    const [term, setTerm] = useState('');
    const dispatch = useAppDispatch();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setTerm(value);
        dispatch(fetchUsers(value));
    };

    return (
        <div>
            <input
                type="text"
                className="form-control rounded-5 px-4 mb-4"
                style={{ borderColor: "D4DEFE" }}
                value={term}
                onChange={handleChange}
            />
            <Svgs svgName="search" color="#432EAB" styles={{ width: 24, height: 24 }} />
        </div>
    );
}
