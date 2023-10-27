## Live Server

You can access the live server at [https://simply-fi-server.onrender.com](https://simply-fi-server.onrender.com).

## API Endpoints

### Get User Information

Retrieve user information by providing the account number.

- **Endpoint:** `/api/passbook/:accountNumber`
- **Method:** GET
- **Parameters:**
  - `accountNumber` (String): The account number of the user you want to retrieve.


### Add Transaction

Add a transaction to the passbook of a specific user.

- **Endpoint:** `/api/passbook/:accountNumber`
- **Method:** POST
- **Parameters:**
  - `accountNumber` (String): The account number of the user to whom you want to add the transaction.

#### Example

To add a transaction to the passbook of the user with account number `0192837465`, make a POST request to:




## Getting Started

To set up your own instance of this React App, follow these steps:

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies by running: `npm install`
4. Run the React app: `npm run dev`
