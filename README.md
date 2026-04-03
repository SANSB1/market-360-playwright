# Market 360 Automation Tests

## Project Overview
This project contains **automation test scripts** for the **Market 360 website** using **Playwright**.  
The tests cover:  
- Home page loading and validation  
- Navigation via "Shop Now" button  
- Sign Up functionality  

This repo is ideal for **testing automation practice** and demonstrates basic Playwright usage with selectors, navigation, and validations.

---

## Test Cases Covered

### 1. Home Page Loads
- Navigates to the home page (`https://market-360-frontend-zeta.vercel.app/`)  
- Verifies the page title contains "Market360"  
- Ensures "Shop Now" button is visible

### 2. Shop Now Navigation
- Clicks on the "Shop Now" button  
- Validates navigation to the shop/sign-in page  

### 3. Sign Up Functionality
- Fills in email and password on the Sign Up page  
- Clicks the submit button  
- Waits for Sign In heading to appear  
- Clicks the Sign In button if needed  

---

## Project Structure
```text
market-360-playwright/
├── tests/                  # Playwright test scripts
│   └── market360.spec.js
├── README.md               # Project documentation
└── .gitignore              # Optional: ignores node_modules and logs