/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2017 Dan "Ducky" Little
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import React from 'react';
import ReactDOM from 'react-dom';

import * as measure from 'gm3/components/measure';
import Application from 'gm3/application';

import { shallow } from 'enzyme';

/*
 * Test getBearing()
 */

describe('getBearing tests', () => {

    let app = new Application();

    //const m = shallow(
    //        <MeasureTool store={app.store}/>
    //);

    const pointA = [0, 0];

    var m = new measure.MeasureTool({ store: app.store});
    //console.log(m);

    test('Test Due North', () => {
        const pointB = [0, 1];
        expect(m.getBearing(pointA, pointB)).toBe('Due North');
    });
    test('Test Due East', () => {
        const pointB = [1, 0];
        expect(m.getBearing(pointA, pointB)).toBe('Due East');
    });
    test('Test Due South', () => {
        const pointB = [0, -1];
        expect(m.getBearing(pointA, pointB)).toBe('Due South');
    });
    test('Test Due West', () => {
        const pointB = [-1, 0];
        expect(m.getBearing(pointA, pointB)).toBe('Due West');
    });
    test('Test NE Quad', () => {
        const pointB = [1, 1];
        expect(m.getBearing(pointA, pointB)).toBe('N45-0-0E');
    });
    test('Test SW Quad', () => {
        const pointB = [-1, -1];
        expect(m.getBearing(pointA, pointB)).toBe('S45-0-0W');
    });
});
