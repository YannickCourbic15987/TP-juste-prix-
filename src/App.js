import React from "react";

function App() {

  // function Welcomefunc({ name, children }) {
  //   return (
  //     <>
  //       <h1>bonjour {name}</h1>
  //       <p>
  //         {children}
  //       </p>
  //     </>
  //   )
  // }

  class Welcome extends React.Component {



    render() {


      return (

        <>
          <p>bonjour {this.props.name}</p>
          <p>
            {this.props.children}
          </p>
        </>


      )
    }
  }
  class Oclock extends React.Component {
    // pour créer un nouvel état ,il faut utiliser un constructeur
    constructor(props) {
      super(props)
      this.state = { date: new Date() }//état initiale
      this.timer = null

    }
    // qui permet de déterminer quand un composant a été monter 
    componentDidMount() {
      this.timer = window.setInterval(this.tick.bind(this), 1000)
    }
    //quand un composant est supprimer 
    componentWillUnmount() {
      window.clearInterval(this.timer)
    }
    tick() {
      this.setState({ date: new Date() })
    }

    render() {



      return (
        <>
          Il est {this.state.date.toLocaleDateString()} et l'heure est  {this.state.date.toLocaleTimeString()}

        </>

      )
    }
  }

  // class Incrementer extends React.Component {
  //   // qui incrémente un chiffre  toute les secondes 

  //   constructor(props) {

  //     super(props)

  //     this.state = { n: props.start }//valeur initiale de ma valeur 
  //     this.timer = null

  //   }

  //   componentDidMount() {
  //     window.setInterval(this.incrementation.bind(this), 1000)
  //   }

  //   componentWillUnmount() { window.clearInterval(this.timer) }

  //   incrementation() {
  //     this.setState(
  //       { n: this.state.n + 1 }

  //     )
  //   }



  //   render() {

  //     return (
  //       <>
  //         <p>incrémentation object : {this.state.n} </p>



  //       </>
  //     )
  //   }
  // }


  // class ManualIncrement extends React.Component {
  //   constructor(props) {
  //     super(props)
  //     this.state = { y: 0 }

  //   }
  //   incrementation2() {
  //     this.setState(
  //       { y: this.state.y + 1 }

  //     )
  //   }



  //   render() {

  //     return (
  //       <>
  //         <p> Valeur: {this.state.y}</p>

  //         <button onClick={this.incrementation2.bind(this)}>incrémentation</button>
  //       </>
  //     )
  //   }
  // }



  class IcrementDynamic extends React.Component {
    constructor(props) {

      super(props)
      this.state = { x: props.start, timer: null }

    }
    componentDidMount() {
      this.play()
    }
    componentWillUnmount() {
      this.pause()
    }
    incrementplus() {
      this.setState({
        x: this.state.x + this.props.step
      })
    }
    pause() {
      window.clearInterval(this.state.timer)
      this.setState(
        { timer: null }
      )
    }
    play() {
      this.setState({
        timer: window.setInterval(this.incrementplus.bind(this), 1000)
      })
    }

    render() {




      return <div>
        valeur: {this.state.x}
        <button onClick={() => {
          this.pause.bind(this)
        }}>Pause</button>



      </div>

    }

  }





  function Home() {

    return (
      <>
        <Welcome name=" Dorothée" > salut ça va ?  </Welcome>
        <Welcome name=" jean "> et toi jean ? </Welcome>
        <Oclock />
        {/* <Incrementer start={1} /> */}
        {/* <ManualIncrement /> */}

        <IcrementDynamic start={1} step={1} />

      </>
    )
  }














  return <div className="App">
    <Home />
  </div>;

}

export default App;