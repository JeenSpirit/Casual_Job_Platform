import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { Typography, Box } from '@mui/material';
import RecommandButton from '../RecommandButton/RecommandButton';
import { useState } from 'react';

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column'}}>
        <Typography variant='h4' sx={{ width: '50%' }} color='white'>
        Trustworthy connections, efficient results.
        </Typography>
        
        <TextField
          id="input-with-icon-textfield"
          label="Search"
          variant="outlined"
          size="large"
          onFocus={()=>setIsFocused(true)}
          onBlur={()=>setIsFocused(false)}
          sx={{
            width: '50%',
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white',
              },
              '&:hover fieldset': {
                borderColor: 'white', 
              },
              '&.Mui-focused fieldset': {
                borderColor: 'black', 
              }
            },
            marginTop:'20px',
            marginBottom:'20px'
          }}


          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: isFocused?'black':'white'}} />
              </InputAdornment>
            ),
          }}
          InputLabelProps={{
            style: { color: isFocused?'black':'white' }, 
          }}

        />
        
        <Box sx={{ display: 'flex',visibility:{xs:'hidden',sm:'hidden', md:'visible'} }}>
          <Typography sx={{ marginRight: 1 }} color='white'>Popular: </Typography>
          <RecommandButton />
        </Box>
      </Box>


    </>
  )
}

export default SearchBar