import {createContext, useContext, useEffect, useState} from 'react'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile} from 'firebase/auth'
import {auth} from '../../firebaseConfig'
import { update } from 'firebase/database';

const UserContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [username, setUsername] = useState("");

    const createUser = (email, password, username) => {
        return createUserWithEmailAndPassword(auth, email, password);
        setUsername(username);
    }

    const updateUsername = (username) => {
        updateProfile(auth.currentUser, {
            displayName: username
        });

        setUser(auth.currentUser)
    }

    const logout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <UserContext.Provider value={{ createUser, updateUsername, logout, user }}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    const createUser = useContext(UserContext);
    return createUser;
}