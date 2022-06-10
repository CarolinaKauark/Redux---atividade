import React, { Component } from 'react';

import { connect } from 'react-redux';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import { actionProfessional } from '../redux/actions/action';

class ProfessionalForm extends Component {
  constructor() {
    super();
    this.state = {
      curriculo: '',
      cargo: '',
      descricao: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = () => {
    console.log(this.props);
    const { history, buttonDispatch1 } = this.props;
    buttonDispatch1(this.state);
    history.push('/formdisplay');
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { curriculo, cargo, descricao } = this.state;
    const { buttonDispatch1 } = this.props;
    return (
      <fieldset>
        <TextArea
          label="Resumo do currículo: "
          value={ curriculo }
          name="curriculo"
          maxLength="1000"
          onChange={ this.handleChange }
          required
        />
        <Input
          label="Cargo:"
          name="cargo"
          type="text"
          value={ cargo }
          onChange={ this.handleChange }
          required
        />
        <TextArea
          label="Descrição do cargo: "
          name="descricao"
          maxLength="500"
          onChange={ this.handleChange }
          value={ descricao }
          required
        />
        <Button
          label="enviar"
          onClick={ this.handleSubmit }
        />
      </fieldset>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  buttonDispatch1: (state) => dispatch(actionProfessional(state)),
});

export default connect(null, mapDispatchToProps)(ProfessionalForm);
