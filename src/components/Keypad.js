// Code Keypad Component Here
import React from 'react'
class Keypad extends Component {


    handleInputPassword = () => {
        console.log('Entering password...')
    }


    render() {
        return (
            <div>
                <input type="password" onKeyUp={handleInputPassword}/>
            </div>
        )
    }
}
export default Keypad





