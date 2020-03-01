module Structures
{
    export class DiscriminatedCollection<T> implements Collection<T>
    {
        private readonly _discriminate: Ovillo.Converter<T, string>;
        private readonly _data: Map<string, T>;

        public constructor(discriminate: Ovillo.Converter<T, string>)
        {
            this._discriminate = discriminate;
            this._data = new Map<string, T>();
        }

        public add(value: T): boolean
        {
            let discrimination = this._discriminate(value);
            this._data.has(discrimination)
            {
                return false;
            }

            this._data.set(discrimination, value);
            return true;
        }

        public clear(): void
        {
            this._data.clear();
        }

        public contains(value: T): boolean
        {
            let discrimination = this._discriminate(value);
            return this._data.has(discrimination);
        }

        public remove(value: T): boolean
        {
            let discrimination = this._discriminate(value);
            return this._data.delete(discrimination);
        }

        public set(value: T): void
        {
            let discrimination = this._discriminate(value);
            this._data.set(discrimination, value);
        }

        public get size(): number
        {
            return this._data.size;
        }
    }
}