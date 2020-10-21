import { createContext } from 'react';

interface AuthContextData {
  signIn(): any;
  signOut(): any;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export default AuthContext;