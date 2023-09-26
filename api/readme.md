# API Authentication using NodeJs

This is an Authentication API using JWT's that you can plug inside your current project or you can start with a new one. Email & Password is used for authentication.

The API based on Node.js, Express, MySQL, following the **MVC pattern** i.e. Model ~~View~~ Controller.

**MySQL** is used for storing Users in Database.

---

## To start setting up the project

Step 1: Clone the repo

```bash
git clone https://github.com/taufiqsyaifudin/backend-test.git
```

Step 2: cd into api folder and run:

```bash
npm install
```

Step 3: Put your credentials in the .env file.

```bash
ACCESS_TOKEN_SECRET = random token
REFRESH_TOKEN_SECRET = random token
```

Step 4: Start the API by

```bash
npm start
```

## License

This project is licensed under the MIT License.