import { ValuesController } from "./Controllers/ValuesController.js";
import { CarsController } from "./Controllers/CarController.js"
class App {
  // valuesController = new ValuesController();
  carController = new CarsController()
}

window["app"] = new App();
