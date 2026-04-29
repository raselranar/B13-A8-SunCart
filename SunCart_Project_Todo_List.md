# Project Todo List: SunCart – Summer Essentials Store

## 1. Project Initialization & Setup
- [ ] Initialize a Next.js project using the App Router [cite: 33, 112]
- [ ] Install and configure Tailwind CSS [cite: 113]
- [ ] Install DaisyUI or HeroUI for component styling [cite: 114]
- [ ] Set up environment variables for Firebase configuration keys [cite: 11)
- [ ] Initialize a GitHub repository and prepare for at least 10 meaningful commits [cite: 8]

## 2. Authentication & Protected Routes (BetterAuth)
- [ ] Set up BetterAuth for authentication [cite: 73, 115]
- [ ] Create **Register Page**:
    - [ ] Form with Name, Email, Photo-URL, and Password fields [cite: 88]
    - [ ] "Register" button and "Go to Login" link [cite: 88, 93]
    - [ ] Social Login (Google only) [cite: 94]
    - [ ] Success: Redirect to Login page; Failure: Show error toast/message [cite: 90, 91]
- [ ] Create **Login Page**:
    - [ ] Form with Email and Password fields [cite: 76]
    - [ ] "Login" button and "Go to Register" link [cite: 76, 81]
    - [ ] Social Login (Google only) [cite: 82]
    - [ ] Success: Redirect to Home page; Failure: Show error toast/message [cite: 78, 79]
- [ ] Implement **Protected Route** logic for the Product Details page (redirect to Login if unauthenticated) [cite: 67, 69, 70]

## 3. Core Layout & Navigation
- [ ] Create **Navbar**:
    - [ ] Logo and links for Home, Products, and My Profile [cite: 20, 21]
    - [ ] Conditional rendering: User avatar and Logout button (if logged in) vs. Login/Register (if logged out) [cite: 22, 23, 24, 25, 26]
- [ ] Create **Footer**:
    - [ ] Include Contact info, Social links, and Privacy policy [cite: 28, 29, 30]
- [ ] Ensure persistent Navbar and Footer across all routes [cite: 32]
- [ ] Fix potential reloading errors to maintain Single Page Application behavior [cite: 16]

## 4. Data & Home Page
- [ ] Create a JSON file with at least 6 summer products (ID, Name, Brand, Price, Rating, Stock, Description, Image, Category) [cite: 35, 37-49]
- [ ] Build **Hero Section**:
    - [ ] Summer sale banner or slider with text like “Summer Sale 50% OFF” [cite: 52, 53, 54]
- [ ] Build **Popular Products** section:
    - [ ] Display 3 products from the JSON data [cite: 57]
    - [ ] Product cards must show Image, Name, Rating, Price, and a "View Details" button [cite: 58-63]
- [ ] Build **Extra Sections**:
    - [ ] "Summer Care Tips" (skincare/hydration advice) [cite: 65]
    - [ ] "Top Brands" (at least 3–4 static brand cards) [cite: 66]

## 5. Product Details Page (Protected)
- [ ] Create a dynamic route for product details [cite: 67]
- [ ] Display full product information (detailed view) nicely [cite: 72]

## 6. Challenges & Bonuses
- [ ] Create **My Profile** page:
    - [ ] Display logged-in user's Name, Photo, and Email [cite: 101]
- [ ] Implement **Update Information**:
    - [ ] Add an "Update" button in the profile route [cite: 103]
    - [ ] Create a separate route with a form for updating Image and Name [cite: 103, 104, 105]
    - [ ] Integrate BetterAuth `updateUser` functionality [cite: 106]
- [ ] Add animation using one npm package (Animate.css, React-Spring, or Lottie) [cite: 107-110]

## 7. Finalization & Deployment
- [ ] Ensure full responsiveness for Mobile, Tablet, and Desktop [cite: 10]
- [ ] Create a comprehensive `README.md` (Project name, purpose, live URL, features, and npm packages used) [cite: 9]
- [ ] Deploy the application to Vercel or Render [cite: 14]
- [ ] Final check on GitHub commits (minimum 10) [cite: 8]
