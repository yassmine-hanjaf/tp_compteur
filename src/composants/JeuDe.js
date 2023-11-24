import React, { Component } from "react";


class JeuDeu extends Component {
  constructor(props) {
    super(props);
    this.state = { face: null, compteur: 0, end: false };
  }

  jouer = () => {
    let faceval = Math.floor(Math.random() * 6 + 1);
    this.setState({ face: faceval, compteur: this.state.compteur + 1, end: false });
    if (faceval === this.props.cache) this.setState({ end: true });
  };

  ff = () => {
    this.setState({ face: null, compteur: 0, end: false });
  };

  render() {
    return (
      <div className="container mt-5">
        <h1 className="text-center mb-4">Essayer de connaître la bonne face!</h1>
        <img
          src={
            this.state.face === null
              ? "images/init.PNG"
              : `images/face${this.state.face}.PNG`
          }
          alt="dice face"
          className="img-fluid mx-auto d-block"
        />
        <h1 className="text-center">Jeu de dé...</h1>
        <p className="text-center">Face: {this.state.face}</p>
        <p className="text-center">Nombre d'essais: {this.state.compteur}</p>
        {this.state.end ? (
          <div className="text-center">
            <p className="text-success">Bravo! Vous avez trouvé la face.</p>
            <button className="btn btn-danger" onClick={this.ff}>
              Initialiser
            </button>
          </div>
        ) : (
          <div className="text-center">
            <button className="btn btn-success" onClick={this.jouer}>
              Jouer
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default JeuDeu;
