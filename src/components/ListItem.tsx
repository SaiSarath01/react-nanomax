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

  const openArticle = () => {
    window.open(props.url, '_blank');
  }

  return (
    <div className='list-item' onClick={openArticle}>
      <span className='title'>
        {props.title}
      </span>
      <div className='tags'>
        {props.tags.map((each, index) => <Tag name={each} key={index}></Tag>)}
      </div>
    </div>
  )
}

const Tag = (props: any) => {
  return (
    <p className='tag-item'>
      {props.name}
    </p>
  )
}

export default ListItem
