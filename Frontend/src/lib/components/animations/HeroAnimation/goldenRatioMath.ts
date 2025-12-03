function* fibonacciGenerator(num: number) {
    if (num <= 0) return;
    let [num1, num2] = [0, 1];
    yield num1;
    if (num === 1) return;
    yield num2;
    // Loop Starts from 3 since we already yielded the 1st and the 2nd value   
    for (let i = 3; i <= num; i++) {
        [num1, num2] = [num2, num1 + num2];
        yield num2;
    }
}

export const fibonacci = (num: number): number[] => {
    const fibonacciSequence: number[] = [];
    // For loop for iterators that run till done is true  
    for (const value of fibonacciGenerator(num)) {
        fibonacciSequence.push(value);
    }
    return fibonacciSequence;
}
// console.log(fibonacci(5));

export enum Direction {
    Right = 0,
    Down = 1,
    Left = 2,
    Up = 3,
}

/**
 * Returns the direction for the nth Fibonacci square.
 * The pattern cycles: Right -> Down -> Left -> Up -> Repeat...
 */
export const getDirection = (index: number): Direction => {
    return index % 4; // This handles the 0, 1, 2, 3 cycle automatically
};

export const generateSpiralPath = (radii: number[]): string => {
    // Start at the center (0,0)
    let path = `M 0 0`;

    // For tracking current pen position 
    let currentX = 0;
    let currentY = 0;

    radii.forEach((r, index) => {
        const dir = getDirection(index);
        let endX = 0;
        let endY = 0;

        // Calculate where the arc should END based on direction
        switch (dir) {
            case Direction.Right:
                // Moving Right: X increases by radius, Y decreases (goes up) by radius
                // Wait... SVG Coordinates are weird.
                // Let's visualize: We are at bottom-left of the square, arc goes to top-right.
                endX = currentX + r;
                endY = currentY - r;
                break;
            case Direction.Down:
                endX = currentX + r;
                endY = currentY + r;
                break;
            case Direction.Left:
                endX = currentX - r;
                endY = currentY + r;
                break;
            case Direction.Up:
                endX = currentX - r;
                endY = currentY - r;
                break;
        }

        // Append the Arc command
        // A rx ry rotation large-arc-flag sweep-flag x y
        // sweep-flag = 0 means "counter-clockwise" (or inverted coordinates logic)
        // For this specific spiral growth, we usually use sweep=0.
        path += ` A ${r} ${r} 0 0 1 ${endX} ${endY}`;

        // Update Our current path for the next loop 
        currentX = endX;
        currentY = endY;
    })
    return path;
};