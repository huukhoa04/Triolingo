**Server-side**
Server-side code here
**Server-side**
# Cài đặt các package, nhớ cd vào server-side/triolingo
 npm install express mongoose dotenv body-parser cors 
 npm init -y

# tải và cài đặt mongodb
# cài đặt .env
npm install dotenv

# tạo file
Create a .env file in the server directory and add the following environment variables:
MONGODB_URI
JWT_SECRET
The MONGODB_URI is the connection string to your MongoDB database. The JWT_SECRET can be any string of your choice.

# khởi động mongo db
cd "C:\Program Files\MongoDB\Server\8.0\bin" # chuyển đến nơi chứa 
mongod --dbpath "E:\code1\database\mongodb\data"


Server-side/
│
└── Triolingo/
    ├── assets/
    │   └── data/
    ├── config/
    ├── models/
    │   ├── index.js
    │   └── user.js
    ├── node_modules/
    ├── schemas/
    │   ├── index.js
    │   ├── resolvers.js
    │   └── typeDefs.js
    ├── utils/
    │   ├── auth.js
    │   └── helpers.js
    ├── .env
    ├── package-lock.json
    └── package.json
