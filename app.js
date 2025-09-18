import express from 'express';
import userRouter from "./routes/user.routes.js"; // note: .js extension is required

const app = express();
app.set('view engine','ejs');

// ✅ Register parsers first
app.use(express.urlencoded({ extended: true })); // to parse form data
app.use(express.json()); // to parse json data  

// ✅ Then use your routes
app.use('/user', userRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
