import { createContext } from 'react';

interface AuthContextData {
  signIn(): any;
  signOut(): any;
  setLoading(): any;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export default AuthContext;