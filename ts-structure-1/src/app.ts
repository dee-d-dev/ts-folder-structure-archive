import  express,{ Application, Express } from "express";
class App {
  public app: Application;
  public port: number;
  
  constructor(port: number) {
    this.port = port;
    this.app = express()
  }

  listen() {
    this.app.listen(this.port, ()=> {
        console.log(`server running on this ${this.port}`)
    })
  }
}

export default App