import React, { Component } from 'react';

class ProjectItem extends Component {
  deleteProject(id) {
    this.props.onDelete(id);
  }

  render() {
    return (
      <li className="Projects">
        <strong>{this.props.projects.title}</strong>: {this.props.projects.category} <a href="#" onClick={this.deleteProject.bind(this, this.props.projects.id)}>X</a>
      </li>
    );
  }
}

ProjectItem.propTypes = {
  projects: React.PropTypes.object,
  onDelete: React.PropTypes.func
}

export default ProjectItem;