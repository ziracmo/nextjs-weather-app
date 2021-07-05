import React from "react";
import { SearchIcon } from "@heroicons/react/outline";

type Props = { searchQuery: string; setSearchQuery: (value: string) => {} };

type State = { value: string };

export default class SearchBar extends React.Component<Props, State> {
  public state: State = {
    value: "",
  };
  constructor(props: Props) {
    super(props);

    this.state.value = this.props.searchQuery;
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  public handleChange(event: any) {
    this.setState({ value: event.target.value });
  }

  public handleClick() {
    this.props.setSearchQuery(this.state.value);
  }

  public handleKeyDown(event: any) {
    if (event.key === "Enter") {
      this.props.setSearchQuery(this.state.value);
    }
  }

  render() {
    const { value } = this.state;

    return (
      <div className="px-4 md:px-8">
        <div className="bg-white flex items-center rounded-full shadow-xl">
          <input
            value={value}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
            id="search"
            type="text"
            placeholder="Search"
          />

          <div className="p-4">
            <button
              onClick={this.handleClick}
              className="bg-red-500 text-white rounded-full p-2 hover:bg-red-400 focus:outline-none w-12 h-12 flex items-center justify-center"
            >
              <SearchIcon />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
