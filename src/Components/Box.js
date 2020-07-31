import React from 'react';


class Box extends React.Component{

  constructor(props){
    super(props)

    this.state = { color:"orange" };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(){
  let red = Math.floor(Math.random()*255)
  let green = Math.floor(Math.random()*255)
  let blue =  Math.floor(Math.random()*255)
  console.log(this.state.color)
  this.setState({color:`rgb(${red},${green},${blue})`})
  }

  render(){
    return(
      <body className="div" style={{backgroundColor: this.state.color}}>
      <h1>Changed color</h1>
      <button className="button" onClick={this.changeColor}>CHANGE MY COLOR</button>
      </body>
    )
  }
}

export default Box;