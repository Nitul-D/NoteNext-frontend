# NoteNext

**NoteNext** is a secure, cloud-based note-taking application designed to help users capture thoughts, organize ideas, and access them from anywhere. By leveraging cloud storage, NoteNext ensures your data is always synced and protected.

## Features

  * **Secure Authentication:** Robust login and sign-up system to keep your personal notes private.
  * **Cloud Synchronization:** Real-time syncing across devices—never lose a note again.
  * **Minimalist Interface:** A clean, distraction-free UI focused on readability and ease of use.
  * **Responsive Design:** Fully optimized for desktop and mobile browsers.

## Tech Stack

  * **Frontend:** React.js.
  * **Styling:** Bootstrap.
  * **Backend:** Node.js / Express.
  * **Database:** MongoDB for persistent note storage.
  * **Security:** JWT-based authentication and encrypted password hashing.

## Installation

To get a local copy up and running, follow these simple steps:

1.  **Clone the repo**
    ```bash
    git clone https://github.com/your-username/notenext.git
    ```
    ---

    ## Key features

    - Secure user authentication (JWT)
    - Create, read, update, delete notes
    - Responsive UI (mobile + desktop)
    - Simple, RESTful API with CORS enabled

    ## Stack

    - Frontend: React (Create React App)
    - Backend: Node.js + Express
    - Database: MongoDB (Mongoose)
    - Styling: Bootstrap

    ## Repo structure

    - `src/` — React app source
    - `public/` — static assets
    - `backend/` — Express server, routes, models
    - `.eslintrc.json`, `.gitignore` — project configs

    ---

    ## Quickstart (local)

    1. Install dependencies (root and backend):

    ```bash
    npm install
    cd backend
    npm install
    cd ..
    ```

    2. Start both dev servers (frontend + backend):

    ```bash
    npm run both
    ```

    The frontend dev server runs on port `3000` and backend on `5000` by default.

    ---

    ## Environment variables

    Create `.env` files for secrets. Example keys:

    Backend (`backend/.env`)

    - `MONGO_URI` — MongoDB connection string
    - `JWT_SECRET` — secret for signing JWTs
    - `PORT` — backend port (default `5000`)

    ---

    ## API (summary)

    All routes are prefixed with `/api`.

    - `POST /api/auth/createuser` — register: `{ name, email, password }` → `{ success, authToken }`
    - `POST /api/auth/login` — login: `{ email, password }` → `{ success, authToken }`
    - `GET /api/notes/fetchallnotes` — list notes (requires `auth-token` header)
    - `POST /api/notes/addnote` — add note (requires `auth-token` header)
    - `PUT /api/notes/updatenote/:id` — update note (requires `auth-token` header)
    - `DELETE /api/notes/deletenote/:id` — delete note (requires `auth-token` header)

    Client stores the JWT in `localStorage` and sends it as the `auth-token` header on subsequent requests.

    ---

    ## Troubleshooting

    - Check browser devtools network tab for failing requests and the backend logs for incoming requests and errors.

    ---

    ## Contributing

    - Fork, create a branch, and open a pull request. Include tests and keep secrets out of commits.