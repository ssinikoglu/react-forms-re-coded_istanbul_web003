import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label>
            <b>Firstname:</b>
            <input
              type="text"
              name="firstName"
              onChange={(event) => this.props.handleChange(event)}
              value={this.props.formData.firstName}
            />
          </label>
          <label>
            <b>Lastname:</b>
            <input
              type="text"
              name="lastName"
              onChange={(event) => this.props.handleChange(event)}
              value={this.props.formData.lastName}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
