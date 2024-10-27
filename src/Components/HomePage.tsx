import React from 'react';
import Slider from 'react-slick';
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Box,
} from '@mui/material';
import { CarouselItem } from '../Interfaces/CarouselItem';


const carouselItems: CarouselItem[] = [
  {
    image: 'https://source.unsplash.com/1600x900/?shopping,store',
    title: 'Best Deals on Electronics',
    description: 'Discover unbeatable prices on the latest electronics!',
  },
  {
    image: 'https://source.unsplash.com/1600x900/?clothing,fashion',
    title: 'New Fashion Arrivals',
    description: 'Explore the latest trends in fashion with amazing discounts.',
  },
  {
    image: 'https://source.unsplash.com/1600x900/?accessories,shopping',
    title: 'Top Accessories',
    description: 'Get the perfect accessories to complement your style.',
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const HomePage: React.FC = () => {
  return (
    <Container>
      {/* Carousel Section */}
      <Slider {...sliderSettings}>
        {carouselItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              padding: '150px 20px',
              textAlign: 'center',
              color: '#fff',
              borderRadius: '10px',
            }}
          >
            <Typography variant="h3" gutterBottom>
              {item.title}
            </Typography>
            <Typography variant="h6" paragraph>
              {item.description}
            </Typography>
            <Button variant="contained" color="primary" size="large">
              Shop Now
            </Button>
          </Box>
        ))}
      </Slider>

      {/* Featured Products Section */}
      <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 6 }}>
        Featured Products
      </Typography>
      <Grid container spacing={4}>
        {[
          {
            title: 'Stylish Jacket',
            image: 'https://source.unsplash.com/300x300/?jacket,fashion',
            price: '$120',
          },
          {
            title: 'Modern Sneakers',
            image: 'https://source.unsplash.com/300x300/?sneakers,shoes',
            price: '$95',
          },
          {
            title: 'Smart Watch',
            image: 'https://source.unsplash.com/300x300/?smartwatch,tech',
            price: '$220',
          },
          {
            title: 'Backpack',
            image: 'https://source.unsplash.com/300x300/?backpack,travel',
            price: '$70',
          },
        ].map((product, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.title}
              />
              <CardContent>
                <Typography variant="h6">{product.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {product.price}
                </Typography>
                <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* About Section */}
      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Why Shop with Us?
        </Typography>
        <Typography variant="h6" paragraph>
          At ShopNow, we provide you with top-quality products, fast delivery, and unmatched customer service.
        </Typography>
        <Button variant="outlined" color="primary" size="large">
          Learn More
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;
