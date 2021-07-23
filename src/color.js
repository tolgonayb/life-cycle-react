import React from "react";

class Colorizer extends React.Component {
    state = {
        color: 'pink'
    }

    shouldComponentUpdate(newProps, newState) {



        if (newState.color ===  this.state.color){
            return false
        } else {
             return true
        }

    }

    componentWillUpdate() {
        console.log('WILL UPDATE')
    }

    componentDidUpdate() {
        console.log('DID UPDATE')
}

    makePurple = () => {
        this.setState({
            color: 'purple'
        })
}

    makePink = () => {
        this.setState({
            color: 'pink'
        })
}

    render() {
      const style = {
    backgroundColor: this.state.color,
            width: '100px',
            height: '100px'
    }
        return (
            <div>
                <div style={style}/>
                <button onClick={this.makePink}>Pink</button>
                <button onClick={this.makePurple}>Purple</button>
            </div>
        )
    }
}

export default Colorizer;