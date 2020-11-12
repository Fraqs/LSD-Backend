// libraries
import express from 'express';

import IContract from 'contract';
import {} from 'contract/src/dto/airport';

// classes, interfaces & functions
import ContractRPC from './contract/ContractRPC';

// environments variables -> .env or from custom module
const port: number = 3000;

const app: express.Application = express();
app.post('/', ContractRPC);

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
