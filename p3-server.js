/* 
    Project 3
    Sam Rutherford
*/

// Require the Fastify framework and instantiate it
const fastify = require("fastify")();
const fs = require("fs");
const { coinCount} = require("./p3-module.js");
const coins = [{denom: 25, count: 2},{denom: 1, count: 7}];

fastify.get("/", (request, reply) => {
  fs.readFile(`${__dirname}/index.html`, (err, data) => {
    if (err) {
      console.log(err);
      reply.code(500);
      reply.header("Content-Type", "text/html; charset=utf-8");
    } else {
      reply.code(200);
      console.log("URL: ", request.url);
      reply.header("Content-Type", "text/html; charset=utf-8");
      reply.send(data);
    }
  });
});

fastify.get("/coin", (request, reply) => {
  const { denom = 0, count = 0 } = request.query;
  console.log(request.query);
  const coinValue = coinCount({ denom: denom, count: count });
  reply
    .code(200)
    .header("Content-Type", "text/html; charset=utf-8")
    .send(
      `<h2>Value of ${count} of ${denom} is ${coinValue}</h2><br /><a href="/">Home</a>`
    );
});

fastify.get("/coins", (request, reply) => {
  const { option } = request.query;
  console.log(option);
  switch (parseInt(option)) {
    case 1:
      let coinValue = coinCount(
        { denom: 5, count: 3 },
        { denom: 10, count: 2 }
      );
      reply
        .code(200)
        .header("Content-Type", "text/html; charset=utf-8")
        .send(
          `<h2>Option ${option} value is ${coinValue}</h2><br /><a href="/">Home</a>`
        );
    case 2:
      let coinValue2 = coinCount(...coins);
      reply
        .code(200)
        .header("Content-Type", "text/html; charset=utf-8")
        .send(
          `<h2>Option ${option} value is ${coinValue2}</h2><br /><a href="/">Home</a>`
        );
  }
});

// Start server and listen to requests using Fastify
const listenIP = "localhost";
const listenPort = 8080;
const http = require("http");

fastify.listen(listenPort, listenIP, (err, addresponses) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${addresponses}`);
});
