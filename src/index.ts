import express from 'express';
import { router } from './presentation/Routes';

const app = express();

app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log('Server is running on port 3000, localhost:3000');
});
