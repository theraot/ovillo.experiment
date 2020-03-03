module Structures
{
    export class DiscriminatedCollection<Key, T>
    {
        private readonly _keySelector: Ovillo.Converter<T, Key>;
        private readonly _data: Map<Key, T>;

        public constructor(keySelector: Ovillo.Converter<T, Key>)
        {
            this._keySelector = keySelector;
            this._data = new Map<Key, T>();
        }

        public add(value: T): boolean
        {
            let key = this._keySelector(value);
            let result = this._data.has(key);
            this._data.set(key, value);
            return result;
        }

        public clear(): void
        {
            this._data.clear();
        }

        public contains(key: Key): boolean
        {
            return this._data.has(key);
        }

        public get(key: Key): Ovillo.Option<T>
        {
            return Ovillo.Option(this._data.get(key));
        }

        public remove(key: Key): boolean
        {
            return this._data.delete(key);
        }

        public set(value: T): void 
        {
            let key = this._keySelector(value);
            this._data.set(key, value);
        }

        public get size(): number
        {
            return this._data.size;
        }
        
        public take(key: Key): Ovillo.Option<T>
        {
            let result = Ovillo.Option(this._data.get(key));
            this._data.delete(key);
            return result;
        }
    }
}