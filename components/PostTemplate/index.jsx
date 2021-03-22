import Link from 'next/link'
import React from 'react'

function PostTemplate(props) {
  return (
    <Link href={props.link}>
      <li className="card">
        <h2 className="card_title">
          <a
            className="card__link heading-2"
            href={props.link}
            title={props.title}
          >
            {props.title}
          </a>
        </h2>
        <p className="card__desc text">{props.description}</p>
      </li>
    </Link>
  )
}

export default PostTemplate
