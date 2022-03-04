import ping from 'ping'

let hosts: string[] = []

for (let i = 0; i <= 255; i++) {
	hosts.push('192.168.0.' + i)
}

const pingHost = async (host: string) => {
	return await ping.promise.probe(host, {})
}

interface ipState {
	ip: string
	alive: boolean
}

const res = await Promise.allSettled<ipState>(
	hosts.map((host) => {
		return pingHost(host).then((result) => ({ ip: result.inputHost, alive: result.alive }))
	})
).then((r) => r.filter((e) => e.status === 'fulfilled' && e.value.alive))

console.log(res)
