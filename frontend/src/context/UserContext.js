import React, { createContext, useState, useContext } from 'react';

// 1. Context 생성
const UserContext = createContext();

// 2. Provider 컴포넌트 생성
export function UserProvider({ children }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <UserContext.Provider value={{ email, setEmail, password, setPassword }}>
            {children}
        </UserContext.Provider>
    );
}

// 3. 커스텀 Hook 생성
export function useUser() {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('Cannot find UserProvider');
    }
    return context;
}
