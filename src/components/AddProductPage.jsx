import { Button, Form, Input } from 'antd';
import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';



function AddProductPage() {


  let navigate = useNavigate();

  const submitProductForm = (values) => {

    axios.post('https://northwind.vercel.app/api/products', values)
      .then(res => {
        navigate('/products');
      })

  }


  return (<>

    <Form
      name='basic'
      initialValues={{ name: '', unitPrice: 0, unitsInStock: 0 }}
      onFinish={submitProductForm}
    >

      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Unit Price"
        name="unitPrice"
        rules={[{ required: true, message: 'Please input unit price!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Units In Stock"
        name="unitsInStock"
        rules={[{ required: true, message: 'Please input units in stock!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>


    </Form>

  </>
  )
}

export default AddProductPage