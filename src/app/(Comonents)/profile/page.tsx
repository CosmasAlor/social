// 'use client'

// import { Button, Paper, TextField } from "@mui/material";
// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import React {FormDataEvent} from "react";

// const VisuallyHiddenInput = styled('input')({
//   clip: 'rect(0 0 0 0)',
//   clipPath: 'inset(50%)',
//   height: 1,
//   overflow: 'hidden',
//   position: 'absolute',
//   bottom: 0,
//   left: 0,
//   whiteSpace: 'nowrap',
//   width: 1,
// });


// const handleSubmit = (e: React.FormEvent<HTMLFormElement) = > {
//   e.preventDefault();

//   console.log('Form Submitted');
  
// }


// export default function Profile() {


//   function handleSubmit(e:Event) {
//     console.log(e);
    
//   }


//   return (
//     <>
//       <Paper elevation={10} style={{ maxWidth: '50%', margin: '5px auto', padding: '10px' }}>
//         <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
//           <h2>Write a Post</h2>
//           <TextField
//             id="outlined-multiline-flexible"
//             label="Post"
//             multiline
//             rows={4}
//           />

//           <Button
         

//             component="label"
//             variant="contained"
//             startIcon={<CloudUploadIcon />}
//           >
//             Upload files
//             <VisuallyHiddenInput
//               type="file"
//               onChange={(event) => console.log(event.target.files)}
//               multiple
//             />
//           </Button>
//           <Button variant="contained" disableElevation  type="button"> Submit</Button>
//         </form>
//       </Paper>
//     </>
//   );
// }




'use client';

import { Button, Paper, TextField } from "@mui/material";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

// Styled component for visually hidden input
const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

// Define handleSubmit function with correct event type
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log('Form Submitted');
};

export default function Profile() {
  return (
    <>
      <Paper elevation={10} style={{ maxWidth: '50%', margin: '5px auto', padding: '10px' }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h2>Write a Post</h2>
          <TextField
            id="outlined-multiline-flexible"
            label="Post"
            multiline
            rows={4}
          />
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
          >
            Upload files
            <VisuallyHiddenInput
              type="file"
              onChange={(event) => console.log(event.target.files)}
              multiple
            />
          </Button>
          <Button
            variant="contained"
            disableElevation
            type="submit" // Change this to "submit" to trigger form submission
          >
            Submit
          </Button>
        </form>
      </Paper>
    </>
  );
}

