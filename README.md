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
| POST   | `/api/user/is-auth`    | User authenticated or not                         |
| GET    | `/api/product/list`      | Fetch available product          |
| POST   | `/api/product/add`        | Add a new product                     |
| POST   | `/api/product/update/:id`        | updates the quantity of a new product                     |

## Repository
The code for this project can be found here:
[Repository](https://github.com/akash11-01/Inventory-Management-Tool)

---

For contributions or issues, feel free to open a pull request or raise an issue!
