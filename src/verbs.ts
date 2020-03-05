module Game
{
    export type Verb = {readonly type: "click", readonly position: Geometry.Position2}
                     | {readonly type: "resize", readonly size: Geometry.Size2}
}