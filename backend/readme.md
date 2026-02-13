
Backend folder structure : 

quicksell-backend/
├── src/
│   ├── config/                       # Configuration
│   │   ├── database.js              # MongoDB connection
│   │   ├── cloudinary.js            # Cloudinary config
│   │   ├── env.js                   # Environment variables
│   │   └── constants.js             # App constants
│   │
│   ├── controllers/                  # Request Handlers
│   │   ├── authController.js        # Auth logic
│   │   ├── productController.js     # Product CRUD
│   │   ├── userController.js        # User profile
│   │   ├── chatController.js        # Chat messages
│   │   └── notificationController.js
│   │
│   ├── middleware/                   # Custom Middleware
│   │   ├── auth.js                  # JWT verification
│   │   ├── validation.js            # Request validation
│   │   ├── errorHandler.js          # Global error handler
│   │   ├── upload.js                # Multer file upload
│   │   └── rateLimit.js             # Rate limiting
│   │
│   ├── models/                       # Mongoose Models
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Conversation.js
│   │   ├── Message.js
│   │   └── Notification.js
│   │
│   ├── routes/                       # API Routes
│   │   ├── index.js                 # Route aggregator
│   │   ├── auth.routes.js
│   │   ├── products.routes.js
│   │   ├── users.routes.js
│   │   ├── chat.routes.js
│   │   └── notifications.routes.js
│   │
│   ├── services/                     # Business Logic
│   │   ├── authService.js           # JWT, password hashing
│   │   ├── emailService.js          # Email sending (forgot password)
│   │   ├── uploadService.js         # Cloudinary uploads
│   │   ├── notificationService.js   # Push notifications
│   │   └── socketService.js         # Socket.io logic
│   │
│   ├── utils/                        # Utilities
│   │   ├── ApiError.js              # Custom error class
│   │   ├── catchAsync.js            # Async error wrapper
│   │   ├── validators.js            # Validation schemas
│   │   └── helpers.js
│   │
│   ├── socket/                       # Socket.io Handlers
│   │   ├── index.js                 # Socket.io setup
│   │   ├── chatHandlers.js          # Chat events
│   │   └── onlineStatus.js          # User online/offline
│   │
│   └── app.js                        # Express app setup
│
├── server.js                         # Server entry point
├── package.json
├── .env
├── .env.example
├── .gitignore
└── README.md