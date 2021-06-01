import React, { useContext, useEffect, useState } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'

import useClasses from './classes'
import { StateContext } from '../../storage/context'
import { Typography } from '@material-ui/core'
import { chevronSvg } from '../../svg/catalog'
// import { getCatalog } from '../../https/catalogAPI'


const Categories = ({open, close}) => {
    const classes = useClasses()
    const [hoveredItem, setHovered] = useState(0)
    const [state] = useContext(StateContext)

    // useEffect(async _ => {
    //     console.log(state)
    // }, [])
    return (
        <Dialog
            className={classes.root}
            open={open}
            onClose={close}
            // scroll='body'
            style={{}}
            >
            <DialogContent className={classes.content}>
                <ul className='category-list'>
                    {
                        state.catalog.map((category, index) => (
                            <li className='list-item' key={category.id} onMouseEnter={_ => setHovered(index)}>
                                <div className='title-block'>
                                    <Typography>{category.name}</Typography>
                                    {chevronSvg}
                                </div>
                            </li>
                        ))
                    }
                </ul>
                {
                    state.catalog[hoveredItem].child.length > 0 ?
                    <ul className='subcategory-list'>
                        {
                            state.catalog[hoveredItem].child.map(child => (
                                <li key={child.id}>
                                    {child.name}
                                </li>
                            ))
                        }
                    </ul>:
                    <></>
                }
            </DialogContent>
        </Dialog>
    )
}

export default Categories