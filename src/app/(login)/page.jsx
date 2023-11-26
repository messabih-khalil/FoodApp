'use client';
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

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
        setUsername('');
        setPassword('');
    };

    return (
        <div className='flex items-center justify-center h-screen bg-gray-100'>
            <div className='bg-orange-200 p-5 rounded shadow-md w-[500px]'>
                <h1 className='text-3xl font-semibold mb-4 flex items-center justify-center h-full'>
                    {' '}
                    Login{' '}
                </h1>
                <form
                    onSubmit={handleSubmit}
                    className='space-y-3'
                >
                    <div className='space-y-2 w-full'>
                        <p className='font-bold'>Username:</p>
                        <Input
                            type='text'
                            id='username'
                            value={username}
                            onChange={handleUsernameChange}
                            required
                        />
                    </div>
                    <div className='text-sm space-y-2 '>
                        <p className='font-bold'>Password:</p>
                        <Input
                            type='password'
                            id='password'
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>
                    <div>
                        <Button
                            type='submit'
                            className='bg-orange-500 text-white py-2 px-4 rounded-md w-full mt-4'
                        >
                            Login
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
