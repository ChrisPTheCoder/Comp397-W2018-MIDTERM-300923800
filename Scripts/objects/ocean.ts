module objects {
  export class Ocean extends createjs.Bitmap {
    // private instance variables
    private _dy: number;
    private _dx: number;
    // public properties

    // Constructor
    constructor() {
      super(managers.Game.assetManager.getResult("ocean"));
      this.Start();
    }

    // private methods

    // reset the objects location to some value
    private _reset():void {
      //this.y = -960;
      switch (managers.Game.currentScene) {
        case config.Scene.PLAY:
        this.y = -960;
        break;
        case config.Scene.LEVEL2:
         this.x = 1280;
        break;
        case config.Scene.LEVEL3:
        this.x = 640;
        break;
        }
    }

    // move the object to some new location
    private _move():void {
      this.y += this._dy;
    }

    // check to see if some boundary has been passed
    private _checkBounds():void {
      if(this.y >= 0) {
        this._reset();
      }
    }

    // public methods

    // Initializes variables and creates new objects
    public Start():void {
      this._dy = 5;
      this._reset();
    }

    // updates the game object every frame
    public Update():void {
      this._move();
      this._checkBounds();
    }
  }
}
