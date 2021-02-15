const StackOnQueue = require('./27-stack-using-queue');

describe('StackOnQueue', () => {
    test('pop should behave validly 1', () => {
        const stack = new StackOnQueue();
        
        stack.push(1);
        expect(stack.pop()).toEqual(1);
    });

    test('pop should behave validly 2', () => {
        const stack = new StackOnQueue();
        
        stack.push(1);
        stack.push(2);
        stack.push(3);

        expect(stack.pop()).toEqual(3);
        expect(stack.pop()).toEqual(2);
        expect(stack.pop()).toEqual(1);
    });

    test('pop should behave validly 3', () => {
        const stack = new StackOnQueue();
        
        stack.push(1);
        expect(stack.pop()).toEqual(1);
        stack.push(1);
        expect(stack.pop()).toEqual(1);
        stack.push(1);
        stack.push(2);
        expect(stack.length).toEqual(2);
    });

    test('peek should behave like in a valid stack', () => {
        const stack = new StackOnQueue();
        
        stack.push(1);
        stack.push(2);
        expect(stack.peek()).toEqual(2);
    });

    test('isEmpty should behave validly ', () => {
        const stack = new StackOnQueue();
        
        expect(stack.isEmpty()).toBeTruthy();

        stack.push(2);
        expect(stack.isEmpty()).toBeFalsy();
    });
});
