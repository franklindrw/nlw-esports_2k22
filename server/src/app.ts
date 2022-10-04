import express from 'express';
import routes from './routes/index';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';

import swaggerFile from './swagger/swagger-output.json';

//Config
const app = express();
app.use(cors());
app.use (express.json());

//Routes
routes(app);

//Middlewares
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

export default app;