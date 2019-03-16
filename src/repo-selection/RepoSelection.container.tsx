import React, { Component } from "react";
import RepoSelection from "./RepoSelection";

import animals from "./animals.json";
import { Repository } from "./Repository";

function shuffle(a: string[]) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const projects = shuffle(animals)
  .slice(0, 50)
  .sort()
  .map(p => ({ name: p, isSelected: Math.random() > 0.5 }));

interface State {
  projects: Repository[];
  search: string;
}

export default class RepoSelectionContainer extends Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = { projects, search: "" };

    this.onChange = this.onChange.bind(this);
  }

  onChange(name: string, value: boolean) {
    const newState = this.state.projects.map(p =>
      name === p.name ? { ...p, isSelected: value } : p
    );
    this.setState({ projects: newState });
  }

  onSearchChange = (value: string) => {
    this.setState({ search: value });
  };

  render() {
    return (
      <RepoSelection
        onChange={this.onChange}
        onSearchChange={this.onSearchChange}
        projects={this.state.projects}
        search={this.state.search}
      />
    );
  }
}
