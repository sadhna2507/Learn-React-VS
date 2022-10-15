import React, {useContext} from 'react'
import { NameContext } from '../App'

export function ComponentC() {
    const name = useContext(NameContext)
  return (
    <div>ComponentC - {name}</div>
  )
}
