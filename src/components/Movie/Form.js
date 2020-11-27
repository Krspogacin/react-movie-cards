import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      imageURL: '',
      title: '',
      subtitle: '',
      description: '',
      imageURLErrorFlag: false,
      titleErrorFlag: false,
      subtitleErrorFlag: false,
      descriptionErrorFlag: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  addItem(event) {
    event.preventDefault();
    if (this.state.imageURL && this.state.title && this.state.subtitle && this.state.description) {
      let object = {
        id: this.state.id,
        imageUrl: this.state.imageURL,
        title: this.state.title,
        subtitle: this.state.subtitle,
        description: this.state.description,
      };
      this.props.addItem(object);
      this.setState(prevState => {
        return {
          id: prevState.id + 1,
        };
      });
    } else {
      if (!this.state.imageURL) {
        this.setState({ imageURLErrorFlag: true });
      } else {
        this.setState({ imageURLErrorFlag: false });
      }
      if (!this.state.title) {
        this.setState({ titleErrorFlag: true });
      } else {
        this.setState({ titleErrorFlag: false });
      }
      if (!this.state.subtitle) {
        this.setState({ subtitleErrorFlag: true });
      } else {
        this.setState({ subtitleErrorFlag: false });
      }
      if (!this.state.description) {
        this.setState({ descriptionErrorFlag: true });
      } else {
        this.setState({ descriptionErrorFlag: false });
      }
    }
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <form autoComplete="off">
          <input
            style={{ marginBottom: 5 }}
            name="imageURL"
            value={this.state.imageURL}
            onChange={this.handleChange}
            placeholder="Image URL"
            required
          />
          {this.state.imageURLErrorFlag && (
            <div>
              <small>Required field</small>
            </div>
          )}
          <br />
          <input
            style={{ marginBottom: 5 }}
            name="title"
            value={this.state.title}
            placeholder="Title"
            onChange={this.handleChange}
            required
          />
          {this.state.titleErrorFlag && (
            <div>
              <small>Required field</small>
            </div>
          )}
          <br />
          <input
            style={{ marginBottom: 5 }}
            name="subtitle"
            value={this.state.subtitle}
            placeholder="Subtitle"
            onChange={this.handleChange}
            required
          />
          {this.state.subtitleErrorFlag && (
            <div>
              <small>Required field</small>
            </div>
          )}
          <br />
          <input
            style={{ marginBottom: 5 }}
            name="description"
            value={this.state.description}
            placeholder="Description"
            onChange={this.handleChange}
            required
          />
          {this.state.descriptionErrorFlag && (
            <div>
              <small>Required field</small>
            </div>
          )}
          <br />
          <button
            onClick={event => {
              this.addItem(event);
            }}
          >
            Add new movie
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
