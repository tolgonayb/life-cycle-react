import React from "react";

class Toogle extends React.Component {
    state = {
        show: true
    }

    hideElement = () => {
        this.setState({
            show: false
        })
    }

     showElement = () => {
        this.setState({
            show: true
        })
    }


    render() {
        const content = this.state.show ? this.props.view : <h1>Hide</h1>
        return (
            <div>
                {content}
                <input type ='button' value='Hide element' onClick={this.hideElement}/>
                <input type ='button' value='Show element' onClick={this.showElement}/>
       </div>
        )
    }
}

export default Toogle