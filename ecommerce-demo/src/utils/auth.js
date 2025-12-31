export const login = () => {
    localStorage.setItem('token', 'fake-token');
}

export const logout = () => {
    localStorage.removeItem('token');
}

export const getToken = () => {
    return localStorage.getItem('token');
}

