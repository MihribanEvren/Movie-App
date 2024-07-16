import { Card, CardMedia, Box, Typography } from '@mui/material';

const SliderItem = ({ movie }) => {
  return (
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
  );
};

export default SliderItem;
