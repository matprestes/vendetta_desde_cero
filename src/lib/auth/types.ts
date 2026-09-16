export interface User {
  id: string;
  username: string;
  email?: string;
  serverUni: string;
  role: 'player' | 'admin' | 'moderator';
  family?: string;
  points?: number;
  rank?: number;
}

export interface GameUniverse {
  id: string;
  name: string;
  description?: string;
  speed: number;
  isOpen: boolean;
  registeredCount: number;
  onlineCount: number;
  opensAtUnix?: number | null;
}

export interface AuthSession {
  user: User;
  token: string;
  expiresAt: number;
}

export interface LoginResult {
  success: boolean;
  message?: string;
  user?: User;
}
