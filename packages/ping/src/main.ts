// import WebSocket, { WebSocketServer } from 'ws'

// const wss = new WebSocketServer({
// 	port: 8888,
// 	perMessageDeflate: {
// 		zlibDeflateOptions: {
// 			// See zlib defaults.
// 			chunkSize: 1024,
// 			memLevel: 7,
// 			level: 3,
// 		},
// 		zlibInflateOptions: {
// 			chunkSize: 10 * 1024,
// 		},
// 		// Other options settable:
// 		clientNoContextTakeover: true, // Defaults to negotiated value.
// 		serverNoContextTakeover: true, // Defaults to negotiated value.
// 		serverMaxWindowBits: 10, // Defaults to negotiated value.
// 		// Below options specified as default values.
// 		concurrencyLimit: 10, // Limits zlib concurrency for perf.
// 		threshold: 1024, // Size (in bytes) below which messages
// 		// should not be compressed if context takeover is disabled.
// 	},
// })

import { createServer } from 'https'
import { readFileSync } from 'fs'
import { WebSocketServer } from 'ws'

const server = createServer()
const wss = new WebSocketServer({ server })

wss.on('connection', function connection(ws) {
	console.log(wss.clients)

	ws.on('message', function message(data) {
		console.log('received: %s', data)
	})

	ws.send('something')
})

server.listen(8888, () => {
	console.log('listen at 8888')
})
// import ping from 'ping'

// let hosts: string[] = []

// for (let i = 0; i <= 255; i++) {
// 	hosts.push('192.168.0.' + i)
// }

// const pingHost = async (host: string) => {
// 	return await ping.promise.probe(host, {})
// }

// interface ipState {
// 	ip: string
// 	alive: boolean
// }

// const res = await Promise.allSettled<ipState>(
// 	hosts.map((host) => {
// 		return pingHost(host).then((result) => ({ ip: result.inputHost, alive: result.alive }))
// 	})
// )
// // .then((r) => r.filter((e) => e.status === 'fulfilled' && e.value.alive))

// console.log(res)
