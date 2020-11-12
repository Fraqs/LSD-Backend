// libraries
import * as http from 'http';
import { createServer, RPCFunctions } from '@node-rpc/server';
import { jsonDeserializer as deserializer } from '@node-rpc/server/dist/deserializers/jsonDeserializer';

// classes, interfaces & functions
import IContract from './IContract';
import UserDTO from './UserDTO';

const api: RPCFunctions<IContract, { lang: string }> = {
	getString: () => async () => await 'RPC String',
	getNumber: () => async () => await 123456789,
	getBoolean: () => async () => await true,
	getUser: () => async () => await new UserDTO('Steph', 'D.'),
};

const RPCServer = createServer({ api, deserializer });

async function RPCRequestHandler(req: http.IncomingMessage, res: http.ServerResponse) {
	try {
		const result = await RPCServer.handleAPIRequest(req, { lang: 'en' });
		const json: string = String(JSON.stringify(result));
		res.write(json);
	} catch (error) {
		console.log(error.message);
		res.write('error');
	}

	res.end();
}

export default RPCRequestHandler;
