import React from 'react'
import { Box,Container,Grid,Typography,TextField,Button, Stack    } from '@mui/material';

function Fetchsurvey() {
  return (

<div className='fetchsurvey'> 
    <Box className='container-viewsurvey'>
        <Box className='container-viewsurvey-title'>
            <Container sx={{ width:'100%'}} className='title-container'>
                <Typography variant="h4" component="h4" gutterBottom>
                    Survey Title lorem impsum timtle
                </Typography>
            </Container>
        
            <Container sx={{ width:'100%',marginBottom:"30px"}} className='desc-container'>
                <Typography variant="body1" gutterBottom>
                    lorem10 impsu desc lorem10  lorem10 impsu desc lorem10 lorem10 impsu desc lorem10
                </Typography>
            </Container>
       </Box>
    </Box>

    <Box className='container-viewsurvey-1'>
        <Box>
            <Container sx={{ width:'100%',minHeight:'10rem'}} className='title-container'>
                <Typography variant="body1" sx={{fontWeight:400,letterSpacing:'1px'}} gutterBottom>
                    What is your emailid?
                </Typography>
                <TextField
                    required
                    id="standard-required"
                    placeholder='your answer'
                    variant="standard"
                    sx={{ width:'50%',marginTop:'20px' }}
                />
            </Container>

        </Box>
    </Box>
    
    
    <Box className='container-viewsurvey-1'>
        <Box>
            <Container sx={{ width:'100%',minHeight:'10rem'}} className='title-container'>
                <Typography variant="body1" sx={{fontWeight:400,letterSpacing:'1px'}} gutterBottom>
                    Please descrive how you feel about this survey?
                </Typography>
                <TextField
                    required
                    id="standard-required"
                    placeholder='your answer'
                    variant="standard"
                    sx={{ width:'50%',marginTop:'20px' }}
                />
            </Container>

        </Box>
    </Box>


    <Box className='container-viewsurvey-1'>
        <Box>
            <Container sx={{ width:'100%',minHeight:'10rem'}} className='title-container'>
                <Typography variant="body1" sx={{fontWeight:400,letterSpacing:'1px'}} gutterBottom>
                    What is your college name?
                </Typography>
                <TextField
                    required
                    id="standard-required"
                    placeholder='your answer'
                    variant="standard"
                    sx={{ width:'50%',marginTop:'20px' }}
                />
            </Container>

        </Box>
    </Box>
    <Stack className='button-stack' direction="row" sx={{marginBottom:'100px'}}>
        <Button variant="contained" href="#contained-buttons">Submit</Button>
        <Button href="#text-buttons">Clear form</Button>
    </Stack>
</div>
  )
}

export default Fetchsurvey