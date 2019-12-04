import React from 'react';
import {
  Table,
  Spin
} from 'antd'


export default (props) => {
  const { loading, ...rest } = props
  return (
    <Spin spinning={loading}>
      <Table {...rest} />
    </Spin>
  )
}