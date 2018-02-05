import * as React from 'react';

export interface GenericListProps<T> {
  items: T[];
  render: (item: T, index: number) => JSX.Element;
}

class GenericList extends React.Component<GenericListProps<string>, {}> {
  render() {
    const { items, render } = this.props;

    return (
      <div>
        {items.map(render)}
      </div>
    );
  }
}

export default GenericList;