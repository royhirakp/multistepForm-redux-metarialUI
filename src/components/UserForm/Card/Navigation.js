import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useSelector, useDispatch } from 'react-redux';
import { setPage } from '../../../Store/slice/pageNoSlice';




export default function LabelBottomNavigation(props) {
const pageNo = useSelector((satate)=> satate.pageNo)
  const dispatch = useDispatch();
  const handleChange = (event, newValue) => {
    dispatch(setPage(newValue))
    // props.data.setPageNo(newValue)
  };

  return (
    <>
    {/* <h1>{pageNo}</h1> */}
    <BottomNavigation sx={{ width: 500 }} value={pageNo} onChange={handleChange}>
      <BottomNavigationAction
        label="Page 1"
        value= {1}
        icon={<h1>1</h1>}
      />
      <BottomNavigationAction
        label="Page 2"
        value={2}
        icon={<h1>2</h1>}
      />
      <BottomNavigationAction
        label="Page 3"
        value={3}
        icon={<h1>3</h1>}
        // onClick={(e)=>console.log(e.target)}
      />
      <BottomNavigationAction
        label="Page 4"
        value={4}
        icon={<h1>4</h1>}
        // onClick={(e)=>console.log(e.target)}
      />
      {/* <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} /> */}
    </BottomNavigation>
    </>
  );
}
