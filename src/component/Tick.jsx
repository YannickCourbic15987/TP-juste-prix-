import React from "react"

class Tick extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            n: props.start,
            timer: null
        }


    }
    componentDidMount() {
        this.play()
    }
    componentWillUnmount() {
        this.pause()
    }

    tick() {
        this.setState({ n: this.state.n + this.props.step })
    }

    pause() {
        window.clearInterval(this.state.timer)
        this.setState({
            timer: null
        })
    }

    play() {
        this.setState({
            timer: window.setInterval(this.tick.bind(this), 1000)
        })
    }
    render() {

        return (
            <>
                <p> value :  {this.state.n}</p>
                <button

                > pause </button>


            </>


        )





    }
}

export default Tick