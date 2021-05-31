import React, { useEffect } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'

import useClasses from './classes'
import { getCatalog } from '../../https/catalogAPI'


const Categories = ({open, close}) => {
    const classes = useClasses()

    useEffect(async _ => {
        console.log(await getCatalog())
    }, [])
    return (
        <Dialog
            className={classes.dialog}
            open={open}
            onClose={close}
            scroll='paper'
            >
            <DialogContent className={classes.content}>
                
            </DialogContent>
        </Dialog>
    )
}

export default Categories