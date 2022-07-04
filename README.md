# HTTP Application API

API that accepts HTTP POST request with any JSON payload. The API will respond with a success response containing an exact copy of the JSON request it received.

### Getting Started
#### Prerequisites
- Node.js V16
- NPM

#### Installation

1. Clone the repository
  ```
  git clone https://github.com/tmopinga/http-application-api.git
  ```
2. Install dependencies

```npm install```
4. Run

```
Default port is 3000.
Run on different port either by specifying PORT in the environment variable

PORT=4000 node index.js
```
 

### API Specs

##### POST /**

**Request query parameters**

| Parameter | Description |
| ----- | ----- |
| timeout | any value, if present will not return response |
| status | HTTP response status you want in the response |


##### GET /health

Response

```
200 OK
{ status: "OK" }
```

