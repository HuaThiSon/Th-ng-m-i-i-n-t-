import React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import {
  Grid,
  Link,
  List,
  ListItem,
  Typography,
  Card,
  Button,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import data from '../../utils/data';
import Layout from '../../components/Layout';
import useStyles from '../../utils/styles';

export default function ProductScreen() {
  const classes = useStyles();
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((a) => a.slug === slug);
  if (!product) {
    return <div>Không Tìm Thấy Sản Phẩm</div>;
  }
  return (
    <Layout title={product.name} description={product.description}>
      <div className={classes.section}>
        <NextLink href="/" passHref>
          <Link>
            <Typography>QUAY LẠI CÁC SẢN PHẨM</Typography>
          </Link>
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          ></Image>
        </Grid>
        <Grid item md={3} xs={12}>
          <List>
            <ListItem>
              <Typography className={classes.type} component="h1" variant="h1">{product.name}</Typography>
            </ListItem>
            <ListItem>
              <Typography >Loại mũ: {product.category}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Thương hiệu: {product.brand}</Typography>
            </ListItem>
            <ListItem>
              <Typography>
                Đánh giá: {product.rating} sao ({product.numReviews} Nhận xét)
              </Typography>
            </ListItem>
            <ListItem>
              <Typography> Mô tả: {product.description}</Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Giá Sản Phẩm</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>{product.price}đ</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Status</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>
                      {product.countInStock > 0 ? 'Còn hàng trong kho' : 'Hết hàng'}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Button fullWidth variant="contained" color="primary">
                  Thêm Vào Giỏ Hàng
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}