import React, { useEffect, useState } from 'react';
import {
  Card
} from 'antd'
import Table from '../components/Table'
import Description from '../components/Descriptions'
import Button from '../components/Button'
import request from '../utils/request'

const columns = [
  {
    title: 'name',
    dataIndex: 'name',
    align: 'center'
  },
  {
    title: 'age',
    dataIndex: 'age',
    align: 'center'
  }
]

export default () => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      const res = await request('api/users')
      if(res) {
        setLoading(false)
        setList(res.data.data)
      }
    })()
  }, [])
  const click = async () => {
    setLoading(true)
    const res = await request('api/users')
    if(res) {
      setLoading(false)
      // setList(res.data.data)
    }
  }
  return (
    <div style={{backgroundColor: 'grey'}}>
      <Card style={{marginBottom: '20px'}} title='table with loading'>
        <Table
          loading={loading}
          columns={columns}
          dataSource={list}
        />
      </Card>

      <Card style={{marginBottom: '20px'}} title='description with Skeleton'>
        <Description loading={loading} />
      </Card>

      <Card style={{marginBottom: '20px'}} title='description with Skeleton'>
        <Button click={click} content='按钮' loading={loading} type='primary' />
      </Card>
    </div>
    
  )
}
