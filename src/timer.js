import React from "react";

class Timer extends React.Component {

    componentDidMount() {
        this.my_interval = setInterval(() => {
            console.log('----- interval -----')
            this.setState((old_state) => {
                return {
                    timerCount: old_state.timerCount + 1
                }
            })
        }, 1000)

    }

    componentWillUnmount() {
        clearInterval(this.my_interval)

    }

    state = {
    timerCount: 0
    }

    render() {

        return (
        <div>
            <p> Timer: {this.state.timerCount}</p>
        </div>
        )
    }
}



export default Timer