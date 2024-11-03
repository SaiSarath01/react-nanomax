import React from 'react'

export interface IListItem {
  title: string;
  "short_id": string;
  "short_id_url": string;
  "created_at": string;
  "url": string;
  "tags": Array<string>;
  "score": string;
}


const ListItem = (props: any) => {

  const openArticle = () => {
    // console.log(props)
    window.open(props.url, '_blank');
  }

  const url = () => {
    const splits = props.url.split('/')
    // return 
    // console.log(splits)
    return splits[2]
  }

  return (
    <li className='story'>
      <div className='story_liner h-entry'>
        <div className="voters">
          <a className="upvoter"></a>
          <div className="score">
            {props.score}
          </div>
        </div>
        <div className="details">
          <span role='heading' className='link h-cite u-repost-of'>
            <a className="u-url" href={props.url} rel="ugc noreferrer"  target='_blank'>{props.title}</a>
          </span>

          <span>
            {props.tags.map((each: any, index: any) => <Tag name={each} key={index}></Tag>)}
          </span>
          <a className="domain" href={props.url}  target='_blank'>{url()}</a>
          <div className="byline">
            <a href={`https://lobste.rs/avatars/~${props.submitter_user}`}><img
              srcSet={`https://lobste.rs/avatars/${props.submitter_user}-16.png 1x, https://lobste.rs/avatars/${props.submitter_user}-32.png 2x`}
              className="avatar"
              alt={`${props.submitter_user} avatar`} loading="lazy" decoding="async" src={`https://lobste.rs/avatars/${props.submitter_user}-16.png`} width="16"
              height="16" /></a>
            <span> authored by </span>
            <a className="u-author h-card user_is_author" href={`https://lobste.rs/avatars/~${props.submitter_user}`}>{props.submitter_user}</a>

            {/* <span title="2024-11-02 14:22:15 -0500">12 hours ago</span> */}
            <span> | </span>

            <span className="dropdown_parent">
              <input id={`archive_${props['short_id']}`} className="archive_button" type="checkbox" />
              <label htmlFor={`archive_${props['short_id']}`}>caches</label>
              <div className="archive-dropdown">
                <a
                  href="https://web.archive.org/web/3/https%3A%2F%2Feighty-twenty.org%2F2024%2F07%2F22%2Fm4-crimes">Archive.org</a>
                <a
                  href="https://archive.today/https%3A%2F%2Feighty-twenty.org%2F2024%2F07%2F22%2Fm4-crimes">Archive.today</a>
                <a
                  href="https://ghostarchive.org/search?term=https%3A%2F%2Feighty-twenty.org%2F2024%2F07%2F22%2Fm4-crimes">Ghostarchive</a>
              </div>
            </span>

            <span className="comments_label">
              <span> | </span>
              <a role="heading" href="/s/tn8rt4/m4_crimes_for_metaprogramming">
                {props.comment_count > 0 ? `${props.comment_count} comments` : 'no comments'}   </a>
            </span>
          </div>
        </div>
      </div>
    </li>
  )
}

const Tag = (props: any) => {
  return (
    <a className='tag' title={props.name}  href={`https://lobste.rs/t/${props.name}`}  style={{margin: "0.5em"}} target='_blank'>
      {props.name}
    </a>
  )
}

export default ListItem
