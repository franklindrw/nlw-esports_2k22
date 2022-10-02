import app from './src/app';
import swagger from './src/swagger';

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor online em: http://localhost:${port}`);
});