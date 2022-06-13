import { Box } from '@mui/material'
import React from 'react'
import SingleNews from './SingleNews'
import "../App.css"
export default function News({ docs: { data } }) {
    return (
        <Box>
            <Box className='newsContainer'>
                <Box className="newsgrid">
                    {data?.map((el, i) => {
                        return <SingleNews key={i} el={el} />
                    })}
                </Box>
            </Box>
        </Box>
    )
}
