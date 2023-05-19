import { Button, Modal, Table } from 'antd';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { useNavigate, useNavigation } from 'react-router-dom';



const { confirm } = Modal;
function PrivateProducts() {

  const [products, setproducts] = useState([]);
  const [loading, setloading] = useState(true);

  let navigate = useNavigate();

  useEffect(() => {
    loadData();
  }, [])

  const loadData = () => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setproducts(res.data);
        setloading(false)
      })
  }


  const deleteProduct = (id) => {

    confirm({
      title: 'Do you Want to delete these items?',
      icon: <ExclamationCircleFilled />,
      content: 'Some descriptions',
      onOk() {
        setloading(true);
        axios.delete('https://northwind.vercel.app/api/products/' + id)
          .then(data => {
            loadData();
          })

      },
      onCancel() {
        console.log('Cancel');
      },
    });

  }

  let columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Unit Price',
      dataIndex: 'unitPrice',
      key: 'unitPrice',
    },
    {
      title: 'Stock',
      dataIndex: 'unitsInStock',
      key: 'unitsInStock',
    },
    {
      title: 'Delete',
      dataIndex: 'id',
      key: 'id',
      render: (id) => <Button onClick={() => deleteProduct(id)} type='primary' danger>Delete</Button>
    }
  ]


  return (<>
    <Button type='primary' onClick={() => navigate('/addproduct')}>Add</Button>
    <Table
      dataSource={products}
      columns={columns}
      loading={loading}
    />
  </>
  )
}

export default PrivateProducts