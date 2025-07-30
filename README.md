# Inventory Management Tool

A full-stack web application for managing inventory with user authentication and CRUD operations for products.

## Installation & Setup

### Option 1: Docker (Recommended)

1. **Clone the repository:**

   ```bash
   git clone https://github.com/akash11-01/Inventory-Management-Tool.git
   cd Inventory-Management-Tool
   ```

2. **Create environment variables:**
   Create a `.env` file in the root directory:

   ```env
   MONGO_INITDB_ROOT_USERNAME=admin
   MONGO_INITDB_ROOT_PASSWORD=password123
   MONGO_INITDB_DATABASE=inventory_db
   PORT=4000
   MONGODB_URI=mongodb://admin:password123@mongodb:27017/inventory_db?authSource=admin
   JWT_SECRET=your_secret_key
   BACKEND_URL=http://backend:4000
   ```

3. **Build and run with Docker Compose:**

   ```bash
   docker-compose up --build -d
   ```

4. **Access the application:**

   - Frontend: http://localhost:4000 (served through backend)
   - Backend API: http://localhost:4000
   - MongoDB: localhost:27017

5. **Stop the application:**
   ```bash
   docker-compose down
   ```

### Option 2: Local Development

1. **Clone the repository:**

   ```bash
   git clone https://github.com/akash11-01/Inventory-Management-Tool.git
   cd Inventory-Management-Tool
   ```

2. **Install dependencies:**

   ```bash
   cd Backend
   npm install
   cd ../Frontend
   npm install
   ```

3. **Configure environment variables in Backend:**
   Create a `.env` file in the Backend directory:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=4000
   JWT_SECRET=your_secret_key
   ```

4. **Run the application:**

   ```bash
   # In Backend directory
   npm run dev

   # In Frontend directory (separate terminal)
   npm run dev
   ```

## Docker Commands

### Build and run all services

```bash
docker-compose up --build
```

### Run in background (detached mode)

```bash
docker-compose up -d
```

### View logs

```bash
# All services
docker-compose logs

# Specific service
docker-compose logs frontend
docker-compose logs backend
docker-compose logs mongodb
```

### Stop services

```bash
docker-compose down
```

### Reset database (remove volumes)

```bash
docker-compose down -v
docker-compose up --build
```

### Check service status

```bash
docker-compose ps
```

## API Endpoints

| Method | Endpoint                     | Description                       |
| ------ | ---------------------------- | --------------------------------- |
| POST   | `/api/user/register`         | User registration                 |
| POST   | `/api/user/login`            | User login                        |
| GET    | `/api/user/logout`           | User logout                       |
| GET    | `/api/user/is-auth`          | User authenticated or not         |
| GET    | `/api/products/list`         | Fetch available product           |
| POST   | `/api/products/add`          | Add a new product                 |
| PUT    | `/api/products/:id/quantity` | Updates the quantity of a product |

## Repository

The code for this project can be found here:
[Repository](https://github.com/akash11-01/Inventory-Management-Tool)

---
