'use server';

import { createSession, DEMO_USERS } from '@/lib/auth/session';
import type { LoginFormState } from './types';
import type { User } from '@/lib/auth/types';

export async function loginAction(
  prevState: LoginFormState | null,
  formData: FormData
): Promise<LoginFormState> {
  const uni = (formData.get('uni') as string) || 's1';
  const name = (formData.get('name') as string)?.trim();
  const password = (formData.get('password') as string) || '';

  if (!name || !password) {
    return {
      error: 'Por favor, introduce tu nombre de usuario y contraseña.',
      success: false,
    };
  }

  // Check if uni is valid
  const validUnis = ['s1', 's2', 's3'];
  if (!validUnis.includes(uni)) {
    return {
      error: 'Servidor seleccionado no válido.',
      success: false,
    };
  }

  // Simulated authentication check:
  // 1. Matches demo user if provided
  // 2. Or accepts any user for browser strategy test play
  let matchedUser: User | null = null;
  const demoKey = Object.keys(DEMO_USERS).find(
    (key) => DEMO_USERS[key].username.toLowerCase() === name.toLowerCase()
  );

  if (demoKey) {
    const demo = DEMO_USERS[demoKey];
    if (demo.password === password) {
      matchedUser = {
        id: demoKey,
        username: demo.username,
        serverUni: uni,
        role: demo.role,
        family: demo.family,
        points: 45280,
        rank: 4,
      };
    } else {
      return {
        error: 'Contraseña incorrecta para el usuario proporcionado.',
        success: false,
      };
    }
  } else {
    // Allows flexible onboarding / testing
    if (password.length < 4) {
      return {
        error: 'La contraseña debe tener al menos 4 caracteres.',
        success: false,
      };
    }
    matchedUser = {
      id: `user_${Date.now()}`,
      username: name,
      serverUni: uni,
      role: 'player',
      family: 'Familia Independiente',
      points: 100,
      rank: 174,
    };
  }

  await createSession(matchedUser);

  return {
    error: null,
    success: true,
    message: `¡Bienvenido a Vendetta, Don ${matchedUser.username}! Accediendo al ${uni.toUpperCase()}...`,
  };
}
