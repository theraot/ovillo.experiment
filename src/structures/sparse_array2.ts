module Structures
{
    const quadrants: Array<number> = [3, 3, 2, 4, 0, 2, 4, 1, 1];

    function indexFromCoordinates2(x: number, y: number)
    {
        // ---
        let ax = Math.abs(x);
        let ay = Math.abs(y);
        let ring = ax + ay;
        let acc = Math.sign(ring) * (ring - 1) * (ring - 1) + (ring * ring);
        // --
        const stride = 3;
        let index_x = Math.sign(x) + 1;
        let index_y = Math.sign(y) + 1;
        let index = stride * index_x + index_y;
        let quadrant = quadrants[index];
        // ---
        return acc + (quadrant - 1) * ring + [ax, ay][quadrant % 2];
    }

    export class SparseArray2<T>
    {
        private _data: Array<T>;

        public constructor()
        {
            this._data = new Array<T>();
        }

        public clear(): void
        {
            this._data = new Array<T>();
        }

        public contains(x: number, y: number): boolean
        {
            let index = indexFromCoordinates2(x, y);
            return index in this._data;
        }

        public get(x: number, y: number): T | undefined
        {
            let index = indexFromCoordinates2(x, y);
            return this._data[index];
        }

        public getOrAdd(x: number, y: number, valueFactory: Ovillo.Factory<T>)
        {
            let index = indexFromCoordinates2(x, y);
            if (index in this._data)
            {
                return this._data[index];
            }
            
            let result = valueFactory();
            this._data[index] = result;
            return result;
        }

        public remove(x: number, y: number): boolean
        {
            let index = indexFromCoordinates2(x, y);
            let result = index in this._data;
            delete this._data[index];
            return result;
        }

        public set(x: number, y: number, value: T): void
        {
            let index = indexFromCoordinates2(x, y);
            this._data[index] = value;
        }

        public get size(): number
        {
            return this._data.length;
        }
    }
}