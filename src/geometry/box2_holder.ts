module Geometry
{
    export interface Box2Holder extends Position2Holder, Size2Holder
    {
        box: Box2;
    }
}