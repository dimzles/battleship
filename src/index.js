import "./style.css"
import { GameController } from "./gameController.js"

const gameController = new GameController();
gameController.initialiseGame();
gameController.startGame()