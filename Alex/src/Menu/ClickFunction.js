import React from 'react'

/**ok so this file is a function that that makes things clickable basically...so this works as a function
that when you click on something you basically tell it what to do, so im pretty sure in this scenario
i can just tell it to go to whatever link they pick in the menu. **/
function ClickFunction() {

    /**I googled how this works but basically the onClick thing is just a function 
    that you can bind to things called events which is the console thing here on line 11 **/
    function ThisFunctionHandlesClicks() {
        console.log('ight so it works')
    }
    return (
        <div>
            <button onClick = {ThisFunctionHandlesClicks}>Click</button>
        </div>
    )
}
/** If you look at the console if you inspect the page you'll see little notifications you'll see it works */
export default ClickFunction
