backend/
│── src/
│   ├── app.js                # Express configuration
│   ├── server.js             # App entry point (HTTP server)
│   │
│   ├── config/
│   │   ├── db.js              # MongoDB connection
│   │   ├── env.js             # Env loader (optional)
│   │
│   ├── routes/
│   │   ├── index.js
│   │   └── user.routes.js
│   │
│   ├── controllers/
│   │   └── user.controller.js
│   │
│   ├── services/
│   │   └── user.service.js
│   │
│   ├── models/
│   │   └── user.model.js
│   │
│   ├── middlewares/
│   │   ├── auth.middleware.js
│   │   ├── error.middleware.js
│   │   └── rateLimit.middleware.js
│   │
│   ├── validators/
│   │   └── user.validator.js
│   │
│   ├── utils/
│   │   ├── logger.js
│   │   └── response.js
│   │
│   └── constants/
│       └── roles.js
│
├── tests/
│   └── user.test.js
│
├── .env
├── .env.example
├── .gitignore
├── README.md
└── package.json


| Header                            | Purpose                                                                     |
| --------------------------------- | --------------------------------------------------------------------------- |
| `Content-Security-Policy`         | Controls which scripts, styles, and resources can load, preventing XSS.     |
| `X-Content-Type-Options: nosniff` | Stops browsers from guessing file types.                                    |
| `X-Frame-Options: DENY`           | Prevents clickjacking by blocking your site from being embedded in iframes. |
| `Strict-Transport-Security`       | Forces HTTPS if your site is served over SSL.                               |
| `Referrer-Policy`                 | Controls how much referrer info is sent to other sites.                     |
