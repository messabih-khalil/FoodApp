'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const layout = ({ children }) => {
    const router = useRouter();
    React.useEffect(() => {
        const isLogedin = localStorage.getItem('userInfo');
        if (isLogedin) {
            if (Object.keys(JSON.parse(isLogedin)).length) {
                router.push('/main');
            }
        }
    }, []);
    return <div>{children}</div>;
};

export default layout;
