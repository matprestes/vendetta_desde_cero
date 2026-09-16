import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const uni = searchParams.get('uni') || 's1';

  const servers: Record<string, { label: string; registered: number; online: number; open: boolean; opens_at_unix: number | null }> = {
    s1: {
      label: 'Servidor 1',
      registered: 173,
      online: 14,
      open: true,
      opens_at_unix: null,
    },
    s2: {
      label: 'Servidor 2',
      registered: 94,
      online: 6,
      open: true,
      opens_at_unix: null,
    },
    s3: {
      label: 'Servidor 3 sin vip x1',
      registered: 48,
      online: 3,
      open: true,
      opens_at_unix: null,
    },
  };

  const server = servers[uni] || servers['s1'];

  return NextResponse.json({
    slug: uni,
    registered: server.registered,
    online: server.online,
    open: server.open,
    allows_registration: true,
    opens_at: null,
    opens_at_unix: server.opens_at_unix,
    status_line: `${server.label}: ${server.open ? 'Open' : 'Closed'}`,
  });
}
