// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends Component {
    onBlur = () => {
        console.log('Hey! Eyes on me!')
    }

    onFocus = () => {
        console.log('Good!')
    }

    render() {
        return (
            <div>
                <button onFocus={this.onFocus} />
                <button onBlur={this.onBlur} />
            </div>
        )
    }
}
export default EyesOnMe