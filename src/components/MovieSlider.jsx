import React from 'react';
import Slider from 'react-slick';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const MovieSlider = ({ movies }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
  };

  return (
    <Box sx={{ maxWidth: 1200, margin: '0 auto' }}>
      <Slider {...settings}>
        {movies.map((movie) => (
          <Box key={movie.id} sx={{ padding: 1 }}>
            <Card
              sx={{
                position: 'relative',
                borderRadius: 3,
                margin: 1,
                '&:hover': {
                  cursor: 'pointer',
                  '.overlay': {
                    opacity: 0.3,
                  },
                  '.description': {
                    opacity: 1,
                  },
                },
              }}
            >
              <CardMedia
                component="img"
                height="500"
                image={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title}
                sx={{ borderRadius: 3 }}
              />
              <Box
                className="overlay"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'black',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                }}
              />
              <Box
                className="description"
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  color: 'white',
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  padding: 2,
                  textAlign: 'center',
                }}
              >
                <Typography variant="h4" component="div">
                  {movie.title}
                </Typography>
                <Typography variant="body2" component="div">
                  {movie.overview}
                </Typography>
                <Typography variant="body2" component="div">
                  Rating: {Math.round(movie.vote_average)}
                </Typography>
              </Box>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default MovieSlider;
