import { makeStyles } from '@material-ui/core/styles'

const useClasses = makeStyles(theme => ({
    root: {
        marginTop: 50,
        flexGrow: 1,
    },
    paper: {
        position: 'relative',
        minHeight: 280,
        width: 200,
        zIndex: 10,
        wordBreak: 'break-all',
        border: 'solid 1px #e9e9e9',
        borderRadius: 0,
        overflow: 'hidden',
        padding: '0 10px 13px',
        transition: 'all .3s ease-in-out',
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
                content: 'ass',//'₴',
                color: '#e84343',
                fontSize: 15
            },
        },
        '& .descr': {
            display: 'none',
            fontSize: 13,
            position: 'absolute',
            top: "100%",
            left: 0,
            right: 0,
            padding: '0 13px 13px',
            backgroundColor: '#fff',
            boxShadow: '0 16px 16px rgb(0 0 0 / 24%)'

        },
        '&:hover': {
            position: 'relative',
            overflow: 'visible',
            boxShadow: '0 16px 16px rgb(0 0 0 / 24%)',
            zIndex: 15,
            '& .descr': {
                display: 'block',
            },
        }
    },
    control: {
        padding: theme.spacing(2),
    },
}))

export default useClasses