import { app, initializeServer } from '../server/index.ts';

// Vercel's catch-all Node function forwards /api/* requests to the existing
// Express application. The Express routes already include the /api prefix.
export default async function handler(req: any, res: any) {
  try {
    await initializeServer();
    return app(req, res);
  } catch (error) {
    console.error('SkillTrack API initialization failed:', error);
    if (!res.headersSent) {
      return res.status(500).json({ error: 'API initialization failed.' });
    }
  }
}
