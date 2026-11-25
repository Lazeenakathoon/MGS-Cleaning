# MGS Home & Tank Cleaning

A responsive cleaning-service website for MGS in Pune. The site presents water-tank and home-cleaning services, local service areas, FAQs, and a quick-enquiry form that submits customer requests to a MongoDB-backed Express API.

## Features

- Searchable and category-filterable cleaning service catalog
- Water-tank and home-cleaning service sections
- Clear service-area, process, benefits, and FAQ sections
- Responsive desktop and mobile navigation
- Service selection that opens the enquiry form with the chosen service
- Enquiry form with loading, success, and error states
- Phone and WhatsApp contact links
- Express API health endpoint and MongoDB enquiry storage
- Server-side validation for enquiry submissions

## Technology Stack

### Frontend

- React 19
- Vite 8
- React Router DOM
- Tailwind CSS 4 with Vite integration
- Lucide React icons
- Native Fetch API

### Backend

- Node.js
- Express 5
- Mongoose 9
- MongoDB
- CORS
- dotenv

## Project Structure

```text
MGS Website/
├── Backend/
│   ├── config/
│   │   └── db.js              # MongoDB connection
│   ├── models/
│   │   └── Enquiry.js         # Enquiry schema
│   ├── .env.example           # Backend environment template
│   ├── package.json
│   └── server.js              # Express server and API routes
└── Frontend/
    ├── public/
    ├── src/
    │   ├── api/
    │   │   └── client.js      # Frontend API request helper
    │   ├── components/
    │   ├── data/
    │   │   └── services.js    # Local service catalog
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── .env.example           # Frontend environment template
    ├── package.json
    └── vite.config.js
```

## Prerequisites

Install the following before starting the project:

- Node.js 20 or newer
- npm
- MongoDB local server or a MongoDB Atlas connection string

Recommended Node.js versions:

- Node.js 20.19 or newer
- Node.js 22.12 or newer

## Local Development

Clone or download the repository, open a terminal in the project root, and follow the steps below.

### 1. Configure MongoDB

Start a local MongoDB server, or create a MongoDB Atlas cluster. Keep your database credentials private and do not commit them to source control.

Create the backend environment file:

```powershell
Copy-Item Backend\.env.example Backend\.env
```

`Backend/.env`:

```dotenv
PORT=5000
CLIENT_URL=http://localhost:5173
MONGO_URI=mongodb://127.0.0.1:27017/mgs-cleaning
```

For MongoDB Atlas, replace `MONGO_URI` with the connection string supplied by Atlas.

Environment variables:

| Variable | Required | Description |
| --- | --- | --- |
| `PORT` | No | Backend port. Defaults to `5000`. |
| `CLIENT_URL` | No | Allowed frontend origin for CORS. Defaults to `http://localhost:5173`. |
| `MONGO_URI` | Yes | MongoDB database connection string. |

### 2. Configure the Frontend

Create a frontend environment file if the API is not running on `http://localhost:5000`:

```powershell
Copy-Item Frontend\.env.example Frontend\.env.local
```

`Frontend/.env.local`:

```dotenv
VITE_API_BASE_URL=http://localhost:5000
```

For a deployed frontend, set `VITE_API_BASE_URL` to the public backend origin, for example `https://api.example.com`.

Vite environment variables are included in frontend code at build time. Do not place database credentials or other server secrets in `VITE_*` variables.

### 3. Install Dependencies

```powershell
npm install --prefix Backend
npm install --prefix Frontend
```

### 4. Start the Backend

```powershell
npm --prefix Backend run dev
```

The backend will normally run at:

- API: `http://localhost:5000`
- Welcome route: `http://localhost:5000/`
- Health route: `http://localhost:5000/api/health`

### 5. Start the Frontend

Open a second terminal:

```powershell
npm --prefix Frontend run dev
```

Open the Vite URL printed in the terminal. It is normally `http://localhost:5173`.

## Available Commands

### Frontend

Run from the project root:

| Command | Description |
| --- | --- |
| `npm --prefix Frontend run dev` | Start the Vite development server |
| `npm --prefix Frontend run build` | Create a production build in `Frontend/dist` |
| `npm --prefix Frontend run preview` | Preview the production build locally |
| `npm --prefix Frontend run lint` | Run Oxlint |

Run directly inside `Frontend`:

```powershell
cd Frontend
npm run dev
npm run build
npm run lint
npm run preview
```

### Backend

Run from the project root:

| Command | Description |
| --- | --- |
| `npm --prefix Backend run dev` | Start the API with nodemon |
| `npm --prefix Backend start` | Start the API with Node.js |

Run directly inside `Backend`:

```powershell
cd Backend
npm run dev
npm start
```

There is currently no automated test script in the backend or frontend.

## API

### `GET /`

Returns a welcome message for the API.

Example response:

```json
{
  "success": true,
  "message": "Welcome to MGS Cleaning API"
}
```

### `GET /api/health`

Returns API status and the MongoDB connection state.

Example response:

```json
{
  "success": true,
  "message": "MGS Backend is running",
  "database": "connected"
}
```

### `POST /api/enquiries`

Saves a website enquiry in MongoDB.

Request body:

```json
{
  "name": "Customer name",
  "phone": "+91 98765 43210",
  "area": "Wakad, Pune",
  "service": "Overhead Water Tank Cleaning",
  "details": "Optional request details"
}
```

Successful response:

```json
{
  "success": true,
  "message": "Your enquiry has been sent to MGS.",
  "enquiryId": "<mongodb-object-id>"
}
```

Response statuses:

| Status | Meaning |
| --- | --- |
| `201` | Enquiry saved successfully |
| `400` | Missing or invalid enquiry data |
| `503` | MongoDB is unavailable |
| `500` | Enquiry could not be saved |

The frontend service catalog is maintained locally in `Frontend/src/data/services.js`. The backend does not currently provide a service-catalog endpoint.

## MongoDB Enquiry Model

The `Enquiry` model in `Backend/models/Enquiry.js` contains:

- `name`: required string, 2–100 characters
- `phone`: required phone string, 7–20 characters
- `area`: required string, maximum 100 characters
- `service`: required string, maximum 100 characters
- `details`: optional string, maximum 1000 characters
- `createdAt` and `updatedAt`: added automatically by Mongoose timestamps

Mongoose creates the collection and schema automatically. This project does not use SQL migrations or demo seed records.

## Production Build

Build the frontend:

```powershell
npm --prefix Frontend run build
```

The generated files are placed in `Frontend/dist` and can be served by a static host such as Netlify, Vercel, Azure Static Web Apps, or similar services.

Run the backend in production:

```powershell
npm --prefix Backend start
```

For deployment:

1. Set `MONGO_URI` to the production MongoDB connection string.
2. Set `CLIENT_URL` to the exact frontend production origin.
3. Set `VITE_API_BASE_URL` to the public backend URL before building the frontend.
4. Configure the frontend host to route browser requests to `index.html` for SPA navigation if additional routes are introduced.
5. Configure HTTPS and restrict MongoDB network access to the backend deployment.
6. Do not deploy `Backend/.env` or `Frontend/.env.local` as source-controlled files.

## Troubleshooting

### Frontend cannot connect to the backend

- Confirm the backend is running.
- Open `http://localhost:5000/api/health`.
- Confirm `VITE_API_BASE_URL` matches the backend origin.
- Restart the Vite server after changing `.env.local`.

### Enquiries return `503`

- Confirm MongoDB is running.
- Confirm `MONGO_URI` is correct.
- Check that the database server allows connections from the backend machine or deployment.
- Restart the backend after changing `Backend/.env`.

### CORS errors

- Set `CLIENT_URL` in `Backend/.env` to the frontend URL.
- Restart the backend after changing CORS settings.
- The default allowed origin is `http://localhost:5173`.

### Port already in use

Change `PORT` in `Backend/.env`, update `VITE_API_BASE_URL` in `Frontend/.env.local`, and restart both servers.

## Security

- Keep `.env` and `.env.local` files out of version control.
- Use a MongoDB Atlas user with only the permissions required by this application.
- Rotate any credentials that have already been committed or shared.
- Add rate limiting and stricter request validation before accepting production traffic at scale.
