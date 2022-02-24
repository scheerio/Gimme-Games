import React from 'react'
import Wordpunch from '../games/Wordpunch/Wordpunch';

/* This page is set up as a dynamic route but for now isn't treated as dynamic */

type Props = {}

function Game({}: Props) {

  return (
    <Wordpunch/>
  )
}

export default Game;