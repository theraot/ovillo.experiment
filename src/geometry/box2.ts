/// <reference path="vector2_holder.ts" />

module Geometry
{
    export class Box2 implements Position2Holder, Size2Holder
    {
        public position: Position2;
        public size: Size;

        public constructor(size: Size, position: Position2)
        {
            this.position = position;
            this.size = size;
        }

        public static checkOverlap(a: Box2, b: Box2)
        {
            let al = a.position.x;
            let at = a.position.y;
            let ar = a.position.x + a.size.width;
            let ab = a.position.y + a.size.height;
            let bl = b.position.x;
            let bt = b.position.y;
            let br = b.position.x + b.size.width;
            let bb = b.position.y + b.size.height;
            return (
                    ((al > bl && al < br) || (ar > bl && ar < br) || (bl > al && bl < ar) || (br > al && br < ar))
                &&  ((at > bt && at < bb) || (ab > bt && ab < bb) || (bt > at && bt < ab) || (bb > at && bb < ab))
            );
        }
    }
}