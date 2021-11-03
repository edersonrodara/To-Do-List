const express = require('express');

const userRouter = require('./routers/userRouter');
const loginRouter = require('./routers/loginRouter');

const app = express();
app.use(express.json());

app.use("/user", userRouter)
app.use("/login", loginRouter)

app.listen(3000, () => console.log('ouvindo porta 3000!'));

module.exports = app;