import React, {Component} from 'react';

export class Exercise1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  createMatrix(size) {
      let n = 1;
      let array = [];

      for (let i = 0; i < size; i++) {
          let row = [];

          for (let j = 0; j < size; j++) {
              row.push(n);
              n++;
          }

          array.push(row);
      }

      return array;
  }

  moveRigh(matrix, pos, output) {
      while (pos.x < matrix[pos.y].length) {
        if (output[output.length - 1] != matrix[pos.y][pos.x]) {
            if (output.indexOf(matrix[pos.y][pos.x]) > -1) {
                break;
            }

            output.push(matrix[pos.y][pos.x]);
        }

        pos.x++;
      }

      pos.x--;

      return { pos, output };
  }

  moveDown(matrix, pos, output) {
    while (pos.y < matrix.length) {
      if (output[output.length - 1] != matrix[pos.y][pos.x]) {
          if (output.indexOf(matrix[pos.y][pos.x]) > -1) {
              break;
          }

          output.push(matrix[pos.y][pos.x]);
      }

      pos.y++;
    }

    pos.y--;

    return { pos, output };
  }

  moveLeft(matrix, pos, output) {
      while (pos.x >= 0) {
        if (output[output.length - 1] != matrix[pos.y][pos.x]) {
            if (output.indexOf(matrix[pos.y][pos.x]) > -1) {
                break;
            }

            output.push(matrix[pos.y][pos.x]);
        }

        pos.x--;
      }

      pos.x++;

      return { pos, output };
  }

  moveUp(matrix, pos, output) {
    while (pos.y >= 0) {
      if (output[output.length - 1] != matrix[pos.y][pos.x]) {
          if (output.indexOf(matrix[pos.y][pos.x]) > -1) {
              break;
          }

          output.push(matrix[pos.y][pos.x]);
      }

      pos.y--;
    }

    pos.y++;

    return { pos, output };
  }

  getOutput(matrix) {
    let matrixSize = matrix.length * matrix[0].length;
    let result = {
        pos: {x: 0, y: 0},
        output: []
    }

    while(result.output.length < matrixSize) {
        result = this.moveRigh(matrix, result.pos, result.output);
        if (result.output.length >= matrixSize) break;
        result = this.moveDown(matrix, result.pos, result.output);
        if (result.output.length >= matrixSize) break;
        result = this.moveLeft(matrix, result.pos, result.output);
        if (result.output.length >= matrixSize) break;
        result = this.moveUp(matrix, result.pos, result.output);
        if (result.output.length >= matrixSize) break;
    }

    return result.output;
  }
  
  render() {
    return (
      <div className="container">
        Exercise1 page
      </div>
    );
  }
}

export default Exercise1;
