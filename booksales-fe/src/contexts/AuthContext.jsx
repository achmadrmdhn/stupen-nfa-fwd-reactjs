import React, { createContext, useContext, useState, useEffect } from 'react';
import { useDecodeToken } from '../_services/auth'; 

const AuthContext = createContext(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const decodedToken = useDecodeToken(localStorage.getItem("accessToken"));
    
    useEffect(() => {
        const userInfoStorage = localStorage.getItem("userInfo");
        const tokenSuccess = decodedToken.success;

        if (tokenSuccess && userInfoStorage) {
            try {
                const parsedUserInfo = JSON.parse(userInfoStorage);
                setUser(parsedUserInfo);
                setIsAuthenticated(true);
            } catch (e) {
                // Hapus data jika parsing gagal
                console.error("Failed to parse userInfo:", e);
                localStorage.removeItem("accessToken");
                localStorage.removeItem("userInfo");
                setUser(null);
                setIsAuthenticated(false);
            }
        } else {
            setUser(null);
            setIsAuthenticated(false);
        }
        setIsLoading(false);
    }, [decodedToken.success]); 

    // Fungsi untuk menyimpan data setelah login berhasil
    const loginContext = (token, userInfo) => {
        localStorage.setItem("accessToken", token);
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        // Reload status agar useEffect terpicu dengan token baru
        setIsLoading(true); 
    };

    // Fungsi untuk menghapus data saat logout
    const logoutContext = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("userInfo");
        setUser(null);
        setIsAuthenticated(false);
    };

    const isAdmin = user?.role === 'admin';

    const value = {
        isAuthenticated,
        user,
        isAdmin,
        isLoading,
        loginContext,
        logoutContext,
    };

    if (isLoading) {
        // Tampilkan loading screen saat memproses token awal
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontSize: '24px' }}>
                Loading App...
            </div>
        );
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};