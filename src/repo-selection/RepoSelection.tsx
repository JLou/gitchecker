import React from "react";
import { Repository } from "./Repository";

interface Props {
  projects: Repository[];
  onChange: (name: string, value: boolean) => void;
  onSearchChange: (value: string) => void;
  search: string;
}

export default ({ projects, onChange, onSearchChange, search }: Props) => (
  <>
    <h1 className="title is-1">Repository Selection</h1>
    <section className="columns">
      <div className="column is-three-quarters">
        <div className="field">
          <input
            className="input"
            type="text"
            placeholder="Filter repositories"
            value={search}
            onChange={e => onSearchChange(e.target.value)}
          />
        </div>
        <div className="field">
          <ul className="columns is-multiline">
            {projects
              .filter(({ name }) => name.indexOf(search) != -1)
              .map(p => (
                <li key={p.name} className="column is-one-quarter">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      onChange={e => onChange(e.target.value, e.target.checked)}
                      checked={p.isSelected}
                      value={p.name}
                    />
                    {p.name}
                  </label>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <aside className="column">
        <div className="box">
          <h2 className="title is-2">My selection</h2>
          <ul>
            {projects
              .filter(p => p.isSelected)
              .map(p => (
                <li key={p.name} className="tags has-addons">
                  <span className="tag">{p.name}</span>
                  <a
                    className="tag is-delete is-danger"
                    onClick={() => onChange(p.name, false)}
                  />
                </li>
              ))}
          </ul>
        </div>
      </aside>
    </section>
  </>
);
