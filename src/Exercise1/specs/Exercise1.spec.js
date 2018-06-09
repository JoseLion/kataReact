import React from 'react';
import {shallow} from 'enzyme';
import Exercise1 from '../Exercise1';

describe('Exercise1', () => {
  let component;
  let instance;
  
  beforeEach(() => {
    component = shallow(<Exercise1/>);
    instance = component.instance();
  });
  
  describe('on instance', () => {
    it('should defined state', () => {
      expect(instance.state).toEqual({});
    });

    it('create source array', () => {
        const array = instance.createMatrix(3);

        expect(array[0]).toEqual([1, 2, 3]);
        expect(array[1]).toEqual([4, 5, 6]);
        expect(array[2]).toEqual([7, 8, 9]);
    });

    it('move right', () => {
        const matrix = instance.createMatrix(3);
        const pos = {x: 0, y: 0}
        const currentOutput = [];
        const result = instance.moveRigh(matrix, pos, currentOutput);

        expect(result).toEqual({
            pos: {
                x: 2,
                y: 0
            },
            output: [1, 2, 3]
        });
    });

    it('move down', () => {
        const matrix = instance.createMatrix(3);
        const pos = {x: 2, y: 0}
        const currentOutput = [1, 2, 3];
        const result = instance.moveDown(matrix, pos, currentOutput);

        expect(result).toEqual({
            pos: {
                x: 2,
                y: 2
            },
            output: [1, 2, 3, 6, 9]
        });
    });

    it('move left', () => {
        const matrix = instance.createMatrix(3);
        const pos = {x: 2, y: 2}
        const currentOutput = [1, 2, 3, 6, 9];
        const result = instance.moveLeft(matrix, pos, currentOutput);

        expect(result).toEqual({
            pos: {
                x: 0,
                y: 2
            },
            output: [1, 2, 3, 6, 9, 8, 7]
        });
    });

    it('move up', () => {
        const matrix = instance.createMatrix(3);
        const pos = {x: 0, y: 2}
        const currentOutput = [1, 2, 3, 6, 9, 8, 7];
        const result = instance.moveUp(matrix, pos, currentOutput);

        expect(result).toEqual({
            pos: {
                x: 0,
                y: 1
            },
            output: [1, 2, 3, 6, 9, 8, 7, 4]
        });
    });

    it('check output', () => {
        let matrix = instance.createMatrix(3);
        let output = instance.getOutput(matrix);
        expect(output).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);

        matrix = instance.createMatrix(4);
        output = instance.getOutput(matrix);
        expect(output).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]);

        matrix = [
            [1, 2, 3, 4, 5, 6],
            [7, 8 ,9, 10, 11, 12],
            [13, 14, 15, 16, 17, 18]
        ];
        output = instance.getOutput(matrix);
        expect(output).toEqual([1, 2, 3, 4, 5, 6, 12, 18, 17, 16, 15, 14, 13, 7, 8 ,9, 10, 11]);
    });
  });
});
