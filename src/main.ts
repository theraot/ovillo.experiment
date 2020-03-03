/// <reference path="adapters/gameloop.ts" />
/// <reference path="geometry/vector2.ts" />
/// <reference path="structures/sparse_array2.ts" />
/// <reference path="structures/discriminated_collection.ts" />

module Game
{
    let compositionRoot = new Ovillo.World();

    let positionStorageSegments = new Structures.SparseArray2<Ovillo.ComponentStorage<Geometry.Position2>>();
    let positionStorage = new Ovillo.SegmentedComponentStorage<Geometry.Position2>
    (
        (input) =>
        {
            const scale = 1000;
            let x = input.x / scale;
            let y = input.y / scale;
            return positionStorageSegments.getOrAdd(x, y, () => new Ovillo.DefaultComponentStorage<Geometry.Vector2>());
        }
    );
    compositionRoot.register(Geometry.Position2, positionStorage);

    let verbs = new Structures.DiscriminatedCollection<string, Verb>(verb => verb.type);

    function load()
    {
        window.addEventListener("click", (ev: MouseEvent) => verbs.add({type: "click", x: ev.x, y:ev.y}));
    }

    function update(deltaSeconds: number)
    {
        
    }

    Adapters.gameloop(load, update);
}