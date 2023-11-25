    'use client'
    import React, { useState } from 'react';
    import {Input} from '@/components/ui/input'
    import { Button } from '@/components/ui/button'

    const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Username:', username);
        console.log('Password:', password);

        setUsername('');
        setPassword('');
    };

    return (
        <div className='flex items-center justify-center h-screen bg-gray-100'>
            <div className="bg-orange-200 p-10 rounded shadow-md">

        <h1 className='text-2 font-semibold mb-4 flex items-center justify-center h-full'> Login </h1>
        <form onSubmit={handleSubmit}>
            <div className="mb-5 mt-5 text-sm">
            <label htmlFor="username">Username:</label>
            <Input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                required
            />
            </div>
            <div className="mb-5 text-sm">
            <label htmlFor="password">Password:</label>
            <Input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
            />
            </div>
            <div>
            <Button type="submit" className="bg-orange-500 text-white py-2 px-4 rounded-md w-full">Login</Button>
            </div>
        </form>
        </div>
        </div>
    );
    };

    export default LoginPage;
