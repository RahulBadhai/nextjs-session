"use client";
import { getSession } from '@/api/session';
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// Define the shape of the session object
interface Session {
    username: string;
    role: string;
    // Add other session fields as needed
}

// Define the context value shape
interface SessionContextValue {
    session: Session | null;
    loading: boolean;
}

// Initialize context with a default value
const SessionContext = createContext<SessionContextValue | undefined>(undefined);

// Props for the SessionProvider
interface SessionProviderProps {
    children: ReactNode;
}



// SessionProvider component
export const SessionProvider: React.FC<SessionProviderProps> = ({ children }) => {
    const [session, setSession] = useState<Session | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchSession = async () => {
            try {
                const res = await getSession();
                console.log('data::',res)
            } catch (err) {
                console.error('Failed to fetch session:', err);
                setSession(null);
            } finally {
                setLoading(false);
            }
        };

        fetchSession();
    }, []);

    return (
        <SessionContext.Provider value={{ session, loading }}>
            {children}
        </SessionContext.Provider>
    );
};

// Custom hook to use the session context
export const useSession = (): SessionContextValue => {
    const context = useContext(SessionContext);
    if (!context) {
        throw new Error('useSession must be used within a SessionProvider');
    }
    return context;
};
