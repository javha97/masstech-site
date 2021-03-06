import "../App.css"
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
export const SingleProduct = ({ el, a }) => {
    const { img, title, id } = el
    return (
        <>
            <Link onClick={() => window.scrollTo(0, 0)} to={`/products/${id}`}>
                <Box className={a === 1 ? "a" : "container"}>
                    <img alt="#" src={img[0].imgUrl} className="img" />
                    <Box sx={{ height: '70px', overflowY: 'hidden', display: 'flex', alignItems: 'center' }}>
                        <Typography variant="h5" component="h5" sx={{ height: '70px' }} >
                            {title}
                        </Typography>
                    </Box>
                </Box>
            </Link>
        </>
    )

}