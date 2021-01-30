import React, { Component } from 'react'
/** ok so this ones a class that makes stuff clickable...
im not totally sure about the difference on what it can do in terms of functions but it works as a
class instead of a function...so i think we can use to just call the click function
when you want to bind it to any event**/
class ClickClass extends Component {
    ThisFunctionHandlesClicks() {
        console.log('Click this')
    }
    render() {
        return (
            <div>
                <button onClick = {this.ThisFunctionHandlesClicks}>Click this and see wat happens</button>
            </div>
        )
    }
}

export default ClickClass
