import React from 'react'
import './style.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { setPage } from '../../Store/slice/pageNoSlice';

const Footer = () => {
  let pageNo = useSelector(s=>s.pageNo)
  const dispatch = useDispatch();

  function handelClick(x){
    // console.log('handel click',x)
    if(x==="--"){
      if(pageNo > 1)  dispatch(setPage(pageNo-1))
    }else{
      if(pageNo < 4)  dispatch(setPage(pageNo+1))
    }
  }

  return (
    <div>
      <Stack spacing={2} className='ButtonContainerFooter' direction="row">
        <Button
      {...{disabled: pageNo === 0 || pageNo ===1 ? true : false }}
      onClick={()=>handelClick("--")}
      variant="outlined">Previous</Button>

        <Button
     {...{disabled: pageNo >3 ? true : false }}
      onClick={()=>handelClick("++")}
      variant="outlined">Next</Button>
    </Stack>
    </div>
  )
}

export default Footer
