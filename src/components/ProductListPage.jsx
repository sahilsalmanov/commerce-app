import { Modal, Table } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate, useNavigation } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const { confirm } = Modal;

function ProductListPage() {

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

  const cardsData = [

    {
      title: 'Lizard 3',
      image: '/static/images/cards/contemplative-reptile.jpg',
      description:
        'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    },
    {
      title: 'Lizard 1',
      image: '/static/images/cards/contemplative-reptile.jpg',
      description:
        'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    },
    {
      title: 'Lizard 2',
      image: '/static/images/cards/contemplative-reptile.jpg',
      description:
        'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    },
    {
      title: 'Lizard 3',
      image: '/static/images/cards/contemplative-reptile.jpg',
      description:
        'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    },
  ];
  return (<>
    {/* <Button type='primary' onClick={() => navigate('/addproduct')}>Add</Button>
    <Table
      dataSource={products}
      columns={columns}
      loading={loading}
    /> */}
     <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {cardsData.map((card, index) => (
        <Card key={index} sx={{ maxWidth: 345, marginBottom: '20px' }}>
          <CardMedia component="img" alt="green iguana" height="140" image={card.image} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {card.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {card.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  </>
  )
}

export default ProductListPage