import React from 'react'
import {
  Button
} from 'antd'


export default (props) => {
  const { content, click, ...rest } = props
  return (
    <Button onClick={click} {...rest}>{content}</Button>
  )
}