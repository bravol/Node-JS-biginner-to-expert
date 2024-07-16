//you read the data juck by juck
const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  //solutin 1.using fs.readfile. it crushes
  //   fs.readFile("test-file.txt", "utf-8", (err, data) => {
  //     if (err) console.log(err);
  //     res.end(data);
  //   });
  //2 solution using streams. small  junk read and send ...

  //probs with this aproach
  // back pressure, ont fast enough
  //   const readable = fs.createReadStream("test-file.txt");
  //   readable.on("data", (chunk) => {
  //     res.write(chunk); //response is a writable stream
  //   });
  //   readable.on("end", () => {
  //     res.end();
  //   });
  //   readable.on("error", (err) => {
  //     console.log(err);
  //     res.statusCode = 500;
  //     res.end("Server Error, File not found");
  //   });

  //   solution 3. pipe;line. this is the best solution
  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);
  //readble source.pipe(writabledestination)
  //pipe operator soluves a problem of back pressure. it is very fast than the solution 2
});

server.listen(5000, "127.0.0.1", () => {
  console.log("Server started at port 5000");
});
