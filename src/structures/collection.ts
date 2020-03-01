module Structures
{
    export interface Collection<Value>
    {
        add(value: Value): boolean;

        clear(): void;

        contains(value: Value): boolean;

        remove(value: Value): boolean;

        set(value: Value): void;

        size: number;
    }
}