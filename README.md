# Hono vs Golang on Cloudflare Workers - Load Test Comparison

## Siege Benchmark Results (50 concurrent users, 100 requests each)

| Metric                   | Hono       | Golang     | Winner                |
| ------------------------ | ---------- | ---------- | --------------------- |
| **Transactions**         | 4996       | 4954       | Hono (+42)            |
| **Availability**         | 99.92%     | 99.08%     | Hono (+0.84%)         |
| **Failed Transactions**  | 4          | 46         | Hono (42 fewer)       |
| **Response Time**        | 0.70s      | 0.98s      | Hono (-0.28s)         |
| **Transaction Rate**     | 15.21 tx/s | 13.09 tx/s | Hono (+2.12 tx/s)     |
| **Elapsed Time**         | 328.38s    | 378.34s    | Hono (-50s faster)    |
| **Concurrency**          | 10.60      | 12.82      | Golang (handles more) |
| **Longest Transaction**  | 2.61s      | 2.68s      | Hono (-0.07s)         |
| **Shortest Transaction** | 0.57s      | 0.80s      | Hono (-0.23s)         |

## Summary

**Hono** outperforms Golang across nearly all critical metrics, with notably better response times, higher transaction rate, and significantly fewer failures. Golang maintains slightly higher concurrency levels but at the cost of slower overall performance and more failures under load.
