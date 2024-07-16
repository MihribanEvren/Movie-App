import Slider from 'react-slick';
import { Box } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MovieSlider = ({ children }) => {
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
    <Box sx={{ maxWidth: 1200, margin: '20px auto' }}>
      <Slider {...settings}>{children}</Slider>
    </Box>
  );
};

export default MovieSlider;
