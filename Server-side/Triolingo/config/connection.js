import mongoose from 'mongoose';

// set up connection to MongoDB
const connectDB = async (url) => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(url, {
      dbName: 'triolingo', // name of database
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected!');
  } catch (err) {
    console.log(err.message);
  }
};

export default connectDB;

//thiết lập kết nối với cơ sở dữ liệu MongoDB có tên triolingo