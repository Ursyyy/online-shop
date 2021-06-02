import React, { useContext, useEffect, useState } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'

import useClasses from './classes'
import { StateContext } from '../../storage/context'
import { Typography } from '@material-ui/core'
import { chevronSvg } from '../../svg/catalog'
import { useHistory } from 'react-router'
import { MAIN_PAGE } from '../../router/paths'

const Categories = ({open, close}) => {
    const classes = useClasses()
    const history = useHistory()
    const [hoveredItem, setHovered] = useState(0)
    const [state] = useContext(StateContext)

    const goToCategory = id => {
        close()
        history.push(`${MAIN_PAGE}/${id}`)
    }

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
                                    <Typography onClick={_ => goToCategory(category.id)}>{category.name}</Typography>
                                    {chevronSvg}
                                </div>
                            </li>
                        ))
                    }
                </ul>
                {
                    state.catalog[hoveredItem].child.length > 0 ?
                    <ul className='subcategory-list' key={`sublist-${state.catalog[hoveredItem].id}`}>
                        {
                            state.catalog[hoveredItem].child.map(child => (
                                <li key={child.id} className='second-stage-item'>
                                   <Typography className='cat-name' onClick={_ => goToCategory(child.id)}> {child.name}</Typography>
                                   {
                                       child.child ? 
                                       <ul className='last-stage'>
                                           {
                                               child.child.map(subChild => (
                                                   <li key={subChild.id}>
                                                       <Typography className='third-stage-item' onClick={_ => goToCategory(subChild.id)}>{subChild.name}</Typography>
                                                   </li>
                                               ))
                                           }
                                       </ul>:
                                       <></>
                                   }
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