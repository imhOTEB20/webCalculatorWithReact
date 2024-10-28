import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <button onClick={() => this.props.accion(this.props.valor)}>
        {this.props.valor}
      </button>
    );
  }
}

export default Button;
