import React from 'react'


export interface IListItem {
    title: string;
    "short_id": string;
    "short_id_url": string;
    "created_at": string;
    "url": string;
    "tags": Array<string>;
}


const ListItem = (props: IListItem) => {
    const {title} = props;
  return (
    <div>
      {title}
    </div>
  )
}

export default ListItem
