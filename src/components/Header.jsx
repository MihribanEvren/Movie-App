import { AppBar, Toolbar, Typography, InputBase } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCategory } from '../redux/slices/categorySlice';
import { useState } from 'react';

const StyledLink = styled('button')(({ theme }) => ({
  color: 'white',
  textDecoration: 'none',
  marginRight: theme.spacing(4),
  fontSize: '18px',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'none',
  },
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: theme.spacing(2),
  width: 'auto',
  display: 'flex',
  alignItems: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 1),
    paddingLeft: theme.spacing(1),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (category) => {
    dispatch(setCategory(category));
    navigate(`/${category}`);
  };

  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', boxShadow: 'none' }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}
          >
            <StyledLink
              onClick={() => handleClick('')}
              sx={{ fontWeight: 'bold', fontSize: '24px', color: 'pink' }}
            >
              MIOVIE
            </StyledLink>
            <StyledLink onClick={() => handleClick('tv-series')}>
              TV Series
            </StyledLink>
            <StyledLink onClick={() => handleClick('movies')}>
              Movies
            </StyledLink>
          </Typography>
          <Search>
            <StyledInputBase
              onChange={handleChange}
              placeholder="search"
              value={input}
              inputProps={{ 'aria-label': 'search' }}
            />
            <SearchIcon
              onClick={() => handleClick('search')}
              sx={{ color: 'white', marginRight: '8px', cursor: 'pointer' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}

export default Header;
