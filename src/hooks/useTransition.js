import { useState, useEffect } from 'react'

function goNextTransition(width, index, translate, direction, setTranslate) {
  const to = width * (index + (direction === 'next' ? 1 : -1))

  if (
    ( to - translate < (width / 2 ) && direction === 'next')
    || (to - translate > -(width /2) && direction === 'prev')) {
      setTranslate(direction === 'next' ? translate + 1 : translate - 1)
    }

    setTranslate(direction === 'next' ? translate + 2 : translate -2);
}

export default function useTransition (width, children) {
  const len = children.length
  console.log(children)
  

}