module Adapters
{
    const root = window;

    function ready(callback: () => void)
    {
        if (root.document.readyState != 'loading')
        {
            callback();
        }
        else
        {
            root.document.addEventListener('DOMContentLoaded', callback);
        }
    }

    export function gameloop(load: (window: Window) => void, update: (deltaSeconds: number) => void)
    {
        ready
        (
            () =>
            {
                load(root);
                
                let lastMilliseconds = root.performance.now();
        
                let step = (milliseconds: number) =>
                {
                    let deltaSeconds = (milliseconds - lastMilliseconds) / 1000;
                    lastMilliseconds = milliseconds;
                    update(deltaSeconds);
                    root.requestAnimationFrame(step);
                }

                root.requestAnimationFrame(step);
            }
        )
    }
}