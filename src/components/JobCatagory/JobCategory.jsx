import { Box, Button, Typography } from "@mui/material"
import PropTypes from 'prop-types';

const JobCategory = ({ title, contents }) => {
  JobCategory.propTypes={
    title: PropTypes.string,
    contents:PropTypes.array
  }
  return (
    <Box sx={{display:'flex', flexDirection:'column',justifyContent:'space-between', alignItems:'flex-start', backgroundColor:'white'}}>
        <Typography variant="h6" sx={{color:'black', fontWeight:'700'}}>{title}</Typography>
        {contents.map((content)=>{
            return <Button variant="text" key={content} sx={{color:'black',fontWeight:'300',padding:'0',display:'flex', justifyContent:'flex-start',whiteSpace:'nowrap'}}>{content}</Button>
        })}
    </Box>


  )
}

export default JobCategory