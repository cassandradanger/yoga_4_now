
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

const userRouter = require('./routes/user.router');
const flowsRouter = require('./routes/flows.router');
const poseRouter = require('./routes/pose.router');

const UploaderS3Router = require('react-dropzone-s3-uploader/s3router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(sessionMiddleware);

app.use(passport.initialize());
app.use(passport.session());

app.use('/s3', UploaderS3Router({
  bucket: 'yoga4now',                           // required
  region: 'us-east-2',                            // optional
  headers: {'Access-Control-Allow-Origin': '*'},  // optional
  ACL: 'public-read',                                 // this is the default - set to `public-read` to let anyone view uploads
}));


app.use('/api/user', userRouter);
app.use('/api/flows', flowsRouter);
app.use('/api/pose', poseRouter);


app.use(express.static('build'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
