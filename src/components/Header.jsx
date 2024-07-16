import { AppBar, Toolbar, Typography, InputBase } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

const StyledLink = styled(Link)(({ theme }) => ({
  color: 'white',
  textDecoration: 'none',
  marginRight: theme.spacing(4),
  fontSize: '18px',
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
  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', boxShadow: 'none' }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}
        >
          <StyledLink
            to="/"
            sx={{ fontWeight: 'bold', fontSize: '24px', color: 'pink' }}
          >
            MIOVIE
          </StyledLink>
          <StyledLink to="/tv-shows">TV Shows</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Typography>
        <Search>
          <StyledInputBase
            placeholder="search"
            inputProps={{ 'aria-label': 'search' }}
          />
          <SearchIcon
            sx={{ color: 'white', marginRight: '8px', cursor: 'pointer' }}
          />
        </Search>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
