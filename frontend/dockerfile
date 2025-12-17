# syntax=docker/dockerfile:1.4

FROM node:lts-alpine AS base
WORKDIR /app

# Copy root package files if exist (safe to keep even if unused)
COPY package.json package-lock.json ./

# COPY folders EXACTLY as they appear (case-sensitive!)
COPY Backend Backend/
COPY Frontend Frontend/

# Install dependencies for BOTH
RUN npm install --prefix Backend && npm install --prefix Frontend

# Build frontend (Vite)
RUN npm run build --prefix Frontend

# ---------- Production Image ----------
FROM node:lts-alpine

WORKDIR /app

# Copy backend code
COPY Backend Backend/

# Copy frontend build output into backend (so backend can serve React)
COPY --from=base /app/Frontend/dist ./Frontend/dist

# Install only backend deps
RUN npm install --production --prefix Backend

EXPOSE 3001

CMD ["npm", "run", "dev", "--prefix", "Backend"]
