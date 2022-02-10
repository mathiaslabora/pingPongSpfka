(function () {//objeto Board
    self.Board = function (width, height) {//atributos
        this.width = width;
        this.height = height;
        this.playing = false;
        this.game_over = false;
        this.bars = [];
        this.ball = null;
        
    }

    self.Board.prototype = {
        get elements() {
            var elements = this.bars;
            elements.push(this.ball);
            return elements;
        }
    }
})();


(function () { //objeto boardview
    self.BoardView = function (canvas, board) {
        this.canvas = canvas;
        this.canvas.width = board.width;
        this.canvas.height = board.height;
        this.board = board;
        this.cxt = canvas.getContext("2d");
    }
