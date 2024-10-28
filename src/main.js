import { Game } from "./scenes/Game.js";
import { Boot } from "./scenes/Boot.js";
import { Preloader } from "./scenes/Preloader.js";
import { ChooseLanguage } from "./scenes/ChooseLanguage.js";
import { MainMenu } from "./scenes/MainMenu.js";
import { GameOver } from "./scenes/GameOver.js";
import { Hud } from "./scenes/Hud.js";

//  Find out more information about the Game Config at:
const config = {
  type: Phaser.AUTO,
  width: 1024,
  height: 768,
  parent: "game-container",
  backgroundColor: "#028af8",
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  scene: [Boot, Preloader, ChooseLanguage, MainMenu, Game, GameOver, Hud],
};

// Inicializa el juego
const game = new Phaser.Game(config);