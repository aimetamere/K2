# K2

**K2** is a photo and video production company based in Geneva, Switzerland.  
We craft high-quality visual content that brings stories to life.

🎥 Photography & Videography | 🎬 Creative Direction | 📍 Geneva

---

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Cloudflare** - Hosting & CDN

## Project Setup

### Prerequisites

- Node.js (v18 or higher recommended)
- MongoDB (local installation or MongoDB Atlas account)
- Cloudflare account (for deployment)

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   
   Then edit `.env` and add your MongoDB connection string:
   ```
   MONGODB_URI=mongodb://localhost:27017/k2
   # Or for MongoDB Atlas:
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/k2
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

   The server will start on `http://localhost:3000`

### Project Structure

```
k2/
├── src/
│   ├── config/
│   │   └── database.js      # MongoDB connection
│   ├── models/               # Mongoose models
│   │   └── Example.js
│   ├── routes/               # API routes
│   │   └── example.js
│   └── index.js              # Main server file
├── .env.example              # Environment variables template
├── .gitignore
├── package.json
├── wrangler.toml             # Cloudflare Workers config
└── README.md
```

## MongoDB Setup

### Local MongoDB

1. Install MongoDB locally or use Docker:
   ```bash
   docker run -d -p 27017:27017 --name mongodb mongo
   ```

2. Update `.env` with:
   ```
   MONGODB_URI=mongodb://localhost:27017/k2
   ```

### MongoDB Atlas (Cloud)

1. create cluster
3. Get your connection string
4. Update `.env` with your Atlas connection string

## Cloudflare Deployment

### Option 1: Cloudflare Pages (Recommended for Express apps)

1. Install Wrangler CLI:
   ```bash
   npm install -g wrangler
   ```

2. Login to Cloudflare:
   ```bash
   wrangler login
   ```

3. Deploy to Cloudflare Pages:
   - Connect your GitHub repository to Cloudflare Pages
   - Set build command: `npm install`
   - Set output directory: (leave empty for serverless functions)
   - Add environment variables in Cloudflare dashboard

### Option 2: Cloudflare Workers

For serverless functions, adapt your Express app to Cloudflare Workers format or use the provided example in `cloudflare-pages-functions.js`.

## API Endpoints

- `GET /` - Welcome message
- `GET /health` - Health check with database status
- `GET /api/example` - Get all examples
- `GET /api/example/:id` - Get single example
- `POST /api/example` - Create example
- `PUT /api/example/:id` - Update example
- `DELETE /api/example/:id` - Delete example

## Development

- **Start server:** `npm run dev` or `npm start`
- **Environment:** Development mode runs on port 3000 by default

## Environment Variables

- `MONGODB_URI` - MongoDB connection string (required)
- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment (development/production)

## Next Steps

1. Create your MongoDB models in `src/models/`
2. Create your API routes in `src/routes/`
3. Import and use routes in `src/index.js`
4. Configure Cloudflare deployment settings
5. Set up your production environment variables
