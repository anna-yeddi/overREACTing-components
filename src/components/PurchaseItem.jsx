import React from 'react'
import PurchaseModel from '../models/PurchaseModel'
import PropTypes from 'prop-types'

export default function PurchaseItem(props) {
  const { name, done } = props.item

  const onToggle = () => {
    props.onToggle(props.item)
  }
  const onRemove = () => {
    props.onRemove(props.item)
  }

  return (
    <li>
      {name}
      <button onClick={onToggle}>{done ? 'Uncheck' : 'Check'}</button>
      <button onClick={onRemove}>Remove</button>
    </li>
  )
}
PurchaseItem.propTypes = {
  item: PropTypes.instanceOf(PurchaseModel).isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
}
