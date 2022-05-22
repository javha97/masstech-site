import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  Typography
} from '@mui/material';
import { AddProduct } from '../Addproducts';
import { Search as SearchIcon } from '../../icons/search';
import { useState } from 'react';
export const ProductListToolbar = (props) => {
  const [addproduct, setaddproduct] = useState(false)
  const productfn = () => {
    setaddproduct(true)
  }
  if (addproduct) {
    return (
      <>
        <AddProduct setaddproduct={setaddproduct} num={1} />
      </>
    )
  }
  return (
    <>
      {!addproduct &&
        <>
          <Box {...props}>
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                m: -1
              }}
            >
              <Typography
                sx={{ m: 1 }}
                variant="h4"
              >
                Products
              </Typography>
              <Box sx={{ m: 1 }}>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={productfn}
                >
                  Add products
                </Button>
              </Box>
            </Box>
            <Box sx={{ mt: 3 }}>
              <Card>
                <CardContent>
                  <Box sx={{ maxWidth: 500 }}>
                    <TextField
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SvgIcon
                              fontSize="small"
                              color="action"
                            >
                              <SearchIcon />
                            </SvgIcon>
                          </InputAdornment>
                        )
                      }}
                      placeholder="Search product"
                      variant="outlined"
                    />
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </>
      }
    </>

  )
};
