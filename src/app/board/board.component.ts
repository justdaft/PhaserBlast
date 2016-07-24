import { Component, OnInit } from '@angular/core';
declare var Phaser: any;
// import Phaser from 'phaser';
// declare var Phaser: any;

@Component({
  moduleId: module.id,
  selector: 'app-board',
  templateUrl: 'board.component.html',
  styleUrls: ['board.component.css']
})
export class BoardComponent implements OnInit {
  game: any;
  logo: any;
  constructor() {
    this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create, update: this.update });
  }


  preload() {
    this.game.load.image('logo', '../../assets/car90.png');
  }

  create() {
    this.logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
    this.logo.anchor.setTo(0.5, 0.5);
  }

  update() {
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      this.logo.x -= 4;
    }
    else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      this.logo.x += 4;
    }

    if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
      this.logo.y -= 4;
    }
    else if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
      this.logo.y += 4;
    }
  }

  ngOnInit() {
  }

}
