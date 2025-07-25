## Installation & Setup
1. **Clone the repository:**
   ```bash
   git clone https://github.com/akash11-01/Inventory-Management-Tool.git
   ```
2. **Install dependencies:**
   ```bash
   cd Backend
   npm install
   cd Frontend
   npm install
   ```
3. **Configure environment variables in Backend:**
   Create a `.env` file and define the following:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=4000
   JWT_SECRET=your_secret_key
   ```
4. **Run the application:**
   ```bash
   npm run dev
   ```

## API Endpoints
| Method | Endpoint            | Description                         |
|--------|---------------------|-------------------------------------|
| POST   | `/api/user/register` | User registration                  |
| POST   | `/api/user/login`    | User login                         |
| GET   | `/api/user/logout`    | User logout                         |
| GET   | `/api/user/is-auth`    | User authenticated or not                         |
| GET    | `/api/products/list`      | Fetch available product          |
| POST   | `/api/products/add`        | Add a new product                     |
| PUT   | `/api/products/:id/quantity`        | Updates the quantity of a product                     |

## Repository
The code for this project can be found here:
[Repository](https://github.com/akash11-01/Inventory-Management-Tool)

---

For contributions or issues, feel free to open a pull request or raise an issue!
