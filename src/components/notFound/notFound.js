import { Typography } from '@material-ui/core'
import React from 'react'
import { PAGE_NOT_FOUND } from '../../svg/forProducts'
import useClasses from './classes'

const NotFound = _ => {
    const classes = useClasses()

    return (
        <div className={classes.root}>
            <div className='block'>
                {PAGE_NOT_FOUND}
                <Typography>Page not found</Typography>
            </div>
        </div>  
    )
}

export default NotFound