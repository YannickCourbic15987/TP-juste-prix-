import React from "react";
function HomeJustPrix() {

  class Test extends React.Component {
    constructor(props) {
      super(props)
      this.state = { n: props.start, timer: null }


    }
    componentDidMount() {
      this.play()
    }
    componentWillUnmount() {
      this.pause()
    }


    click() {
      this.setState({ n: this.state.n + this.props.step })
    }
    click3() {
      this.setState({ n: this.state.n + 0 })
    }


    pause() {
      window.clearInterval(this.state.timer)
      this.setState({ timer: window.setInterval(this.click3.bind(this), 1000) })
    }

    play() {
      this.setState({ timer: window.setInterval(this.click.bind(this), 1000) })
    }


    render() {



      return (
        <>
          <p>value {this.state.n}</p>
          <button onClick={
            this.pause.bind(this)
          }> stop</button>
          <button onClick={this.play.bind(this)}>play</button>
        </>
      )
    }
  }

  class JustePrice extends React.Component {
    constructor(props) {
      super(props)
      this.state = { y: 10 }

    }

    click2() {
      this.setState({ y: this.state.y - 1 })
    }




    render() {


      return (
        <>
          <p> result : {this.state.y}</p>

          <button onClick={() => {
            (this.click2(this))
          }}> envoyer </button>

        </>
      )
    }
  }

  class Form extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        nom: " "
      }
      this.handleChange = this.handleChange.bind(this)


    }

    handleChange(e) {


      this.setState({
        nom: e.target.value
      })
      console.log(this.state.nom)
    }



    render() {




      return (
        <>
          <label htmlFor="nom"> votre nom</label>
          <input type="text" id="nom" name="nom" value={this.state.nom} onChange={this.handleChange} />
          <textarea type="text" id="nom" name="nom" value={this.state.nom} onChange={this.handleChange}>

          </textarea>

        </>
      )
    }
  }







  return (
    <>
      <Test start={0} step={1} />
      <JustePrice />
      <Form />
    </>
  )
}
export default HomeJustPrix;
