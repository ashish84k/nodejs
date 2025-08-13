const http = require("http");
const { URL } = require("url");

class Angle {
  #setCORS(res, origin = "*") {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  }

  constructor() {
    this.routes = {
      GET: new Map(),
      POST: new Map(),
    };

    this._corsOrigin = "*"; 

    const handleRequest = (req, res) => {
      const baseUrl = `http://${req.headers.host}`;
      const parsedUrl = new URL(req.url, baseUrl);
      const pathname = parsedUrl.pathname;
      const method = req.method;
      req.params = parsedUrl.username;

      this.#setCORS(res, this._corsOrigin);

      if (method === "OPTIONS") {
        res.writeHead(204);
        return res.end();
      }

      if (this.routes[method] && this.routes[method].has(pathname)) {
        const cb = this.routes[method].get(pathname);

        let body = "";
        req.on("data", (chunk) => {
          body += chunk.toString();
        });

        req.on("end", () => {
          try {
            req.body = JSON.parse(body);
          } catch {
            req.body = body;
          }

          res.json = (data) => {
            res.setHeader("Content-Type", "application/json");
            return res.end(JSON.stringify(data));
          };

          return cb(req, res);
        });

        return;
      }

      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end(`404 Not Found: ${method} ${pathname}`);
    };

    this.server = http.createServer(handleRequest);
  }

  cors(options = { origin: "*" }) {
    this._corsOrigin = options.origin || "*";
  }

  get(route, cb) {
    this.routes.GET.set(route, cb);
  }

  post(route, cb) {
    this.routes.POST.set(route, cb);
  }

  listener(PORT, cb) {
    this.server.listen(PORT, (err) => cb(err));
    this.server.on("connection", () => {
      console.log("⚡ New TCP connection");
    });
  }
}

module.exports = Angle;
