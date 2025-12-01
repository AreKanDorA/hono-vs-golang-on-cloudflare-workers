test-hono:
	siege -c50 -r100 -d1 https://hono.bitbybit-b3.workers.dev

test-golang:
	siege -c50 -r100 -d1 https://golang.bitbybit-b3.workers.dev

