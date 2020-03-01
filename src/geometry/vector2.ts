module Geometry
{
    export class Vector2
    {
        public readonly x: number;
        public readonly y: number;

        public constructor(x: number, y: number)
        {
            this.x = x;
            this.y = y;
        }

        public static add(a: Vector2, b: Vector2) : Vector2
        {
            return {x: a.x + b.x, y: a.y + b.y};
        }

        public static mult(a: Vector2, factor: number) : Vector2
        {
            return {x: a.x * factor, y: a.y * factor};
        }
    }

    export class Position2 extends Vector2
    {
        public constructor(x: number, y: number)
        {
            super(x, y);
        }
    }
}