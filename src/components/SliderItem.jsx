import { Card, CardMedia, Box, Typography } from '@mui/material';
import CardDetail from './CardDetail';
import { useNavigate } from 'react-router-dom';

const SliderItem = ({ item, category }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${category}/${item.id}`);
  };

  return (
    <Box key={item.id} sx={{ padding: 1 }}>
      <Card
        onClick={handleClick}
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
          loading="lazy"
          height="500"
          image={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
          alt={item.title}
          sx={{
            borderRadius: 3,
            objectFit: 'cover',
            objectPosition: 'center',
          }}
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
            {category === 'tv-series' ? item.name : item.title}
          </Typography>
          <Typography variant="body2" component="div">
            {item.overview === ''
              ? 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
              : item.overview}
          </Typography>
          <Typography variant="body2" component="div">
            Rating: {Math.round(item.vote_average)}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default SliderItem;
