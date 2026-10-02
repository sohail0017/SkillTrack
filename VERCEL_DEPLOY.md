# SkillTrack Vercel deployment

## What was fixed

The project uses Vite/React for the frontend and Express for the API. Vercel was serving the frontend but was not starting the Express server, which caused `POST /api/auth/login` to return 404.

This version adds a Vercel catch-all Node function at `api/[...path].ts` and changes `server/index.ts` so it initializes MongoDB without calling `app.listen()` when running on Vercel.

## Deploy

1. Push the project to GitHub and import/redeploy it in Vercel.
2. In Vercel Project Settings -> Environment Variables, add:
   - `MONGODB_URI` = your MongoDB Atlas connection string
   - `JWT_SECRET` = a random secret of at least 32 characters
   - `GEMINI_API_KEY` = your Gemini key if AI features are enabled
3. Redeploy after saving the variables.
4. Test `https://YOUR-DOMAIN.vercel.app/api/health`.

The response should contain `"status":"ok"`.

Do not commit `.env` or real secrets to GitHub.
