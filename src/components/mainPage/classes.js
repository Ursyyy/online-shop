import { makeStyles } from '@material-ui/core/styles'

const useClasses = makeStyles(theme => ({
    root: {
        marginTop: 50,
        flexGrow: 1,
    },
    paper: {
        // position: '-webkit-sticky',
        position: 'sticky',
        height: 300,
        width: 200,
        zIndex: 10,
        border: 'solid 1px #00000025',
        borderRadius: 0,
        padding: '0 10px',
        '& img': {
            width: 180,
            height: 'auto',
            margin: '30px 10px 0',
        },
        '& .title': {
            margin: '5px 0',
            fontSize: 15,
        },
        '& .price': {
            fontSize: 20,
            color: '#e84343',
            '&::after': {
                content: '₴',
                color: '#e84343',
                fontSize: 15
            },
        },
        '& .descr': {
            display: 'none'
        },
        '&:hover': {
            // position: 'relative',
            height: 450,
            zIndex: 15,
            '& .descr': {
                marginTop: 'auto',
                display: 'block',
                fontSize: 13
            },
        }
    },
    control: {
        padding: theme.spacing(2),
    },
}))

export default useClasses