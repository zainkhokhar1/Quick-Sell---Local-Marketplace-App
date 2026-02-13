
Project structure App :

quicksell-mobile/
├── src/
│   ├── api/                          # API Layer (Centralized)
│   │   ├── client.js                # Axios instance with interceptors
│   │   ├── endpoints/
│   │   │   ├── auth.js              # Auth API calls
│   │   │   ├── products.js          # Product API calls
│   │   │   ├── chat.js              # Chat API calls
│   │   │   ├── users.js             # User API calls
│   │   │   └── notifications.js     # Notification API calls
│   │   └── index.js                 # Export all endpoints
│   │
│   ├── assets/                       # Static Assets
│   │   ├── images/
│   │   │   ├── logo.png
│   │   │   ├── placeholder.png
│   │   │   └── onboarding/
│   │   ├── icons/                   # Custom icons
│   │   └── fonts/                   # Custom fonts (if any)
│   │
│   ├── components/                   # Reusable Components
│   │   ├── common/                  # Generic UI components
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Avatar.jsx
│   │   │   ├── Loader.jsx
│   │   │   ├── EmptyState.jsx
│   │   │   ├── ErrorBoundary.jsx
│   │   │   └── Badge.jsx
│   │   │
│   │   ├── forms/                   # Form components
│   │   │   ├── FormInput.jsx
│   │   │   ├── FormTextarea.jsx
│   │   │   ├── FormPicker.jsx
│   │   │   ├── ImagePickerButton.jsx
│   │   │   └── LocationPicker.jsx
│   │   │
│   │   ├── products/                # Product-related components
│   │   │   ├── ProductCard.jsx
│   │   │   ├── ProductGrid.jsx
│   │   │   ├── ProductImageCarousel.jsx
│   │   │   ├── ProductSkeleton.jsx
│   │   │   └── CategoryChip.jsx
│   │   │
│   │   ├── chat/                    # Chat components
│   │   │   ├── MessageBubble.jsx
│   │   │   ├── ConversationCard.jsx
│   │   │   ├── ChatInput.jsx
│   │   │   └── TypingIndicator.jsx
│   │   │
│   │   └── modals/                  # Modal/BottomSheet components
│   │       ├── ImagePickerModal.jsx
│   │       ├── FilterModal.jsx
│   │       └── ConfirmModal.jsx
│   │
│   ├── config/                       # Configuration
│   │   ├── constants.js             # App constants (categories, conditions)
│   │   ├── theme.js                 # Tailwind theme extension
│   │   └── env.js                   # Environment variables
│   │
│   ├── hooks/                        # Custom Hooks
│   │   ├── useAuth.js               # Auth operations
│   │   ├── useKeyboard.js           # Keyboard visibility
│   │   ├── useImagePicker.js        # Image picking logic
│   │   ├── useLocation.js           # Location operations
│   │   ├── useDebounce.js           # Debounce search
│   │   ├── useNetworkStatus.js      # Network detection
│   │   └── useNotifications.js      # Notification handlers
│   │
│   ├── navigation/                   # Navigation Setup
│   │   ├── index.js                 # Root Navigator
│   │   ├── AuthNavigator.jsx        # Auth Stack (Splash, Welcome, Login, Signup)
│   │   ├── MainNavigator.jsx        # Bottom Tab Navigator
│   │   ├── HomeStack.jsx            # Home Tab Stack
│   │   ├── ChatStack.jsx            # Chat Tab Stack
│   │   ├── ProfileStack.jsx         # Profile Tab Stack
│   │   └── linking.js               # Deep linking config
│   │
│   ├── screens/                      # Screen Components
│   │   ├── auth/
│   │   │   ├── SplashScreen.jsx
│   │   │   ├── WelcomeScreen.jsx
│   │   │   ├── LoginScreen.jsx
│   │   │   └── SignupScreen.jsx
│   │   │
│   │   ├── home/
│   │   │   ├── HomeScreen.jsx
│   │   │   ├── ProductDetailScreen.jsx
│   │   │   └── SearchScreen.jsx
│   │   │
│   │   ├── create/
│   │   │   └── CreateListingScreen.jsx
│   │   │
│   │   ├── chat/
│   │   │   ├── MessagesScreen.jsx
│   │   │   └── ChatScreen.jsx
│   │   │
│   │   ├── profile/
│   │   │   ├── ProfileScreen.jsx
│   │   │   ├── EditProfileScreen.jsx
│   │   │   ├── MyListingsScreen.jsx
│   │   │   └── UserProfileScreen.jsx
│   │   │
│   │   └── settings/
│   │       ├── SettingsScreen.jsx
│   │       └── NotificationSettingsScreen.jsx
│   │
│   ├── services/                     # Business Logic Services
│   │   ├── authService.js           # Auth operations (login, register, logout)
│   │   ├── storageService.js        # AsyncStorage wrapper
│   │   ├── uploadService.js         # Cloudinary image upload
│   │   ├── socketService.js         # Socket.io connection manager
│   │   ├── notificationService.js   # Push notification setup
│   │   ├── permissionService.js     # Permission requests
│   │   └── locationService.js       # GPS & geocoding
│   │
│   ├── store/                        # State Management (Zustand)
│   │   ├── authStore.js             # User authentication state
│   │   ├── productStore.js          # Products & categories state
│   │   ├── chatStore.js             # Chat & messages state
│   │   ├── notificationStore.js     # Notifications state
│   │   └── uiStore.js               # UI state (loading, modals, toast)
│   │
│   ├── utils/                        # Utility Functions
│   │   ├── validation.js            # Form validators (Yup schemas)
│   │   ├── formatters.js            # Date, price, distance formatters
│   │   ├── imageHelpers.js          # Compress, resize images
│   │   ├── helpers.js               # General helper functions
│   │   ├── errorHandler.js          # Error handling utility
│   │   └── logger.js                # Custom logger
│   │
│   └── types/                        # TypeScript types (optional but recommended)
│       ├── auth.types.ts
│       ├── product.types.ts
│       ├── chat.types.ts
│       └── navigation.types.ts
│
├── App.jsx                           # Entry point
├── app.json                          # Expo configuration
├── tailwind.config.js                # Tailwind configuration
├── package.json
├── .env                              # Environment variables
├── .env.example                      # Example env file
├── .gitignore
└── README.md