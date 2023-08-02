import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import TextField from '@mui/material/TextField';


import { useForm } from 'react-hook-form';


import axios from 'axios';

export default function Houseform() {
  function showAlert(data){
    alert(data);
  }
const { register, handleSubmit } = useForm();
const postDataToAPI = async(data)=>{
  const apiUrl = 'http://localhost:5000/test/house/register';
  try{
    const response = await axios.post(apiUrl, {data});
    console.log({data});
    console.log('Response:', response.data);
    if(response.data==="The profile already exists")
    {
      showAlert(response.data.message);
    }else if(response.data==="The profile has been created")
    {
      showAlert(response.data.message);
    }else
    {
      showAlert(response.data.message);
    }

  }catch(error){
    // console.error("Error",error);
  }
};
const onSubmit = (data) =>{ 
  // console.log(data)
  // const apiUrl = 'http://localhost:5000/test/post'; // Replace this with your API endpoint URL

  // try {
  //   const response = await axios.post(apiUrl, data);
  //   console.log('Response:', response.message);

  // }
  postDataToAPI(data);
};
// console.log(errors);



const card = (
  <React.Fragment>
   <form onSubmit={handleSubmit(onSubmit)}>  
    <CardContent sx={{p:3}}>
      <Box 
      display="flex"
      flexDirection="row"
      justifyContent={{xs:"left",md:"center"}}
      >
        <Typography sx={{ }} variant="h5" component="div" >
          Register
        </Typography>
      </Box>
      <Box
      display="flex"
      flexDirection="row"
      justifyContent={{xs:"left",md:"center"}}
      >
        <Typography sx={{
          fontSize:10,
          mt:0.5,
          mb:1
        }} 
          color="text.secondary">
            <b>Please enter your details.</b>
        </Typography>
      </Box>

        <Box
        display='flex'
        flexDirection={{xs:"column",md:"row"}}
        justifyContent="center"
        > 
            <Box
            display='flex'
            flexDirection={{xs:"column"}}
            justifyContent="center"
            >   
                    <TextField
                    // sx={{
                    //     mt:{xs:2},
                    //     ml:{xs:0}
                    // }}
                        id="standard-required"
                        label="Name"
                        type="text"
                        autoComplete='off'
                        variant="standard"
                        size="small"
                        // onChange={(e)=>handleChange(e)}
                        placeholder="Name" {...register("nameOwner", {required: true})}
                    />
                    <TextField
                    sx={{
                        mt:{xs:2},
                        ml:{xs:0}
                    }}
                        id="standard-required"
                        label="Contact No"
                        type="number"
                        autoComplete='off'
                        variant="standard"
                        size="small"
                        placeholder="Contact No" {...register("phnNo", {required: true})} 
                    />
                    <TextField
                    sx={{
                        mt:{xs:2},
                        ml:{xs:0}
                    }}
                        id="standard-required"
                        label="Building Name"
                        type="text"
                        autoComplete='off'
                        variant="standard"
                        size="small"
                        placeholder="Buliding Name" {...register("buildingName", {required: true})} 
                    />
                    <TextField
                    sx={{
                        mt:{xs:2},
                        ml:{xs:0}
                    }}
                        id="standard-required"
                        label="Plot No"
                        type="text"
                        autoComplete='off'
                        variant="standard"
                        size="small"
                        placeholder="Plot No" {...register("hosuePlotNo", {required:true})}
                    />
                    <TextField
                    sx={{
                        mt:{xs:2},
                        ml:{xs:0}
                    }}
                        id="standard-required"
                        label="Total Units"
                        type="number"
                        autoComplete='off'
                        variant="standard"
                        size="small"
                        placeholder="Total Units" {...register("units", {required: true})}
                    />
            </Box>
            <Box
            display='flex'
            flexDirection={{xs:"column"}}
            justifyContent="center"
            sx={{
                ml:{md:3}
            }}
            >
                    <TextField
                        sx={{
                            mt:{xs:2,md:0},
                            ml:{xs:0,md:0}
                        }}
                        id="standard-required"
                        label="Comercial Units"
                        type="number"
                        autoComplete='off'
                        variant="standard"
                        size="small"
                        placeholder="Comercial Units" {...register("comercialUnits", {required: true})}
                    />
                    
                    <TextField
                        sx={{
                        mt:{xs:2},
                        ml:{xs:0}
                        }}
                        id="standar-required"
                        label="Residential Units"
                        type="number"
                        autoComplete="off"
                        variant="standard"
                        size="small"
                        placeholder="Residential Units" {...register("residentialUnits", {required: true})}
                    />
                    <TextField
                        sx={{
                        mt:{xs:2},
                        ml:{xs:0}
                        }}
                        id="standar-required"
                        label="Zone"
                        type="text"
                        autoComplete="off"
                        variant="standard"
                        size="small"
                        placeholder="Zone" {...register("zone", {required: true})}
                    />
                    <TextField
                        sx={{
                        mt:{xs:2},
                        ml:{xs:0}
                        }}
                        id="standar-required"
                        label="Circle"
                        type="number"
                        autoComplete="off"
                        variant="standard"
                        size="small"
                        placeholder="Circle" {...register("circle", {required: true})}
                    />
                    <TextField
                        sx={{
                        mt:{xs:2},
                        ml:{xs:0}
                        }}
                        id="standar-required"
                        label="Ward"
                        type="number"
                        autoComplete="off"
                        variant="standard"
                        size="small"
                        placeholder="Ward" {...register("ward", {required: true})}
                    />
            </Box>
        </Box>
      </CardContent>
      {/* <CardActions> */}
          {/* <div className="button-adjuster"> */}
          <Box sx={{ mx:{xs:3,md:18},mt:{xs:2,md:1},mb:{xs:2,md:1} }}>
              <Button 
              sx={{
                width:{xs:222,md:202},
                mb:3
              }}
              size="medium" 
              variant="contained"
              type="submit"
              >
                <span>SUBMIT</span>
              </Button>
          </Box>
          {/* </div> */}
      {/* </CardActions> */}
    </form>
  </React.Fragment>
);

  
  return (
      <Box 
      sx={{ minWidth: 275,alignItems: 'center',mt:{xs:6,md:2},mb:{xs:6,md:2}}}
      display='flex'
      flexDirection="row"
      justifyContent="center"
      >
        <Card variant="outlined">{card}</Card>
      </Box>
  );
}