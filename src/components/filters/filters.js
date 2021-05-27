import React from 'react'
import { Checkbox, Typography, FormControlLabel } from '@material-ui/core'

import useClasses from './classes'

const FiltersBlock = _ => {
    const classes = useClasses()
    return (
        <div className={classes.container}>
            <div className={classes.filterList}>
                {
                    [1,2,3].map(filter => (
                        <div className='filter-group' key={filter}>
                            <Typography className='filter-title'>Filters group {filter}</Typography>
                            {
                                [1, 2, 3, 4, 5, 6].map(item => (
                                    <div className='filter-item' key={item}>
                                        <FormControlLabel
                                        className='title'
                                            control={<Checkbox
                                                        className=''
                                                        disableRipple
                                                        />
                                            }
                                            label={'Filter' + item}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FiltersBlock