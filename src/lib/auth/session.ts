import { cookies } from 'next/headers';
import type { User, AuthSession } from './types';

const SESSION_COOKIE_NAME = 'vendetta_sess';
const SESSION_DURATION_DAYS = 7;

export async function createSession(user: User): Promise<string> {
  const expiresAt = Date.now() + SESSION_DURATION_DAYS * 24 * 60 * 60 * 1000;
  const token = `vdt_${Buffer.from(`${user.id}:${user.username}:${user.serverUni}:${expiresAt}`).toString('base64')}`;

  const sessionPayload: AuthSession = {
    user,
    token,
    expiresAt,
  };

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, JSON.stringify(sessionPayload), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: SESSION_DURATION_DAYS * 24 * 60 * 60,
  });

  return token;
}

export async function getSession(): Promise<AuthSession | null> {
  try {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get(SESSION_COOKIE_NAME);

    if (!sessionCookie?.value) {
      return null;
    }

    const session: AuthSession = JSON.parse(sessionCookie.value);
    if (Date.now() > session.expiresAt) {
      await destroySession();
      return null;
    }

    return session;
  } catch {
    return null;
  }
}

export async function destroySession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
}

// Built-in demo accounts for testing mafia gameplay
export const DEMO_USERS: Record<string, { username: string; password: string; family: string; role: 'player' | 'admin' }> = {
  don_corleone: {
    username: 'DonCorleone',
    password: 'password123',
    family: 'Corleone Syndicate',
    role: 'admin',
  },
  tony_soprano: {
    username: 'TonySoprano',
    password: 'password123',
    family: 'DiMeo Family',
    role: 'player',
  },
  scarface: {
    username: 'TonyMontana',
    password: 'password123',
    family: 'Miami Cartel',
    role: 'player',
  },
};
