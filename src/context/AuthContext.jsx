import { createContext, useEffect, useState, useContext } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import { auth } from '../services/firebase';

const AuthContext = createContext();

export function AuthContextProvider({ children }) { 
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
         
        return () => {
            unsubscribe();
        };
    }, []);

    async function signUp(email, password) {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            // Handle error
            console.error("Error signing up:", error.message);
            throw error; 
        }
    }

    async function logIn(email, password) {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            // Handle error
            console.error("Error logging in:", error);
        }
    }

    async function logOut() {
        try {
            await signOut(auth);
        } catch (error) {
            // Handle error
            console.error("Error logging out:", error);
        }
    }

    return (
        <AuthContext.Provider value={{ user, signUp, logIn, logOut }}>
            {children} 
        </AuthContext.Provider>
    );
}
// Auth context
export function useAuth() {
    return useContext(AuthContext);
}
