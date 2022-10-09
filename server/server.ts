import app from './src/app';
import ip from 'ip';

const address = ip.address();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor online em: http://${address}:${port}`);
});