import React from 'react';
// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    // const { token } = useSelector((state) => state.auth);

    const token = localStorage.getItem('token'); //! for now
    if (token !== null) {
        return children;
    }

    return <Navigate to="/login" />;
};

export default PrivateRoute;
