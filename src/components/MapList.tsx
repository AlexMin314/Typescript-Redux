import * as React from 'react';

export interface GenericListProps<T> {
  items: T[];
  itemRenderer: (item: T, index: number) => JSX.Element;
}

class GenericList extends React.Component<GenericListProps<string>, {}> {
  render() {
    const { items, itemRenderer } = this.props;

    return (
      <div>
        {items.map(itemRenderer)}
      </div>
    );
  }
}

export default GenericList;