import React from 'react'
import css from './Button.css'

export default function Button(props) {
  return (
      <button class="btn">{props.title}</button>
  )
}
