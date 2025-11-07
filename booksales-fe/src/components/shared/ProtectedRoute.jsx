import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const ProtectedRoute = ({ allowedRoles = [] }) => {
    const { isAuthenticated, user, isLoading } = useAuth();
    
    // AuthProvider sudah menangani isLoading, tapi ini sebagai fallback
    if (isLoading) {
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            Checking Access...
        </div>;
    }

    // 1. Cek Otentikasi
    if (!isAuthenticated) {
        // Redirect ke halaman login jika belum login
        return <Navigate to="/login" replace />;
    }
    
    // 2. Cek Otorisasi (Role)
    if (allowedRoles.length > 0) {
        // Cek apakah role pengguna ada di dalam array allowedRoles
        const userHasRequiredRole = allowedRoles.includes(user?.role);
        
        if (!userHasRequiredRole) {
            // Jika role tidak sesuai (misal: user biasa akses admin), redirect ke homepage
            return <Navigate to="/" replace />;
        }
    }

    // Jika otentikasi dan otorisasi lolos
    return <Outlet />; 
};

export default ProtectedRoute;