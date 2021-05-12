import { fade, makeStyles } from '@material-ui/core/styles'

const useClasses = makeStyles(theme => ({
    bar: {
        padding: '0 15px',
        flexGrow: 1,
        '& .menuButton': {
            marginRight: theme.spacing(2),
          },
        '& .title': {
            display: 'none',
            fontWeight: 700,
            textTransform: 'uppercase',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },
        '& .svg': {
            width: 24,
            height: 'auto',
            fill: 'currentColor',
            margin: '0 7px',
            padding: '3px 6px',
            transition: 'all 0.3s ease-out',
            '&:hover': {
                backgroundColor: '#00000033',
                borderRadius: 5,
            }
        }
    },
    catalogBtn: {
        backgroundColor: '#3d465440',
        marginLeft: 35,
        textTransform: 'capitalize',
        fontSize: 17,
        color: '#f2f2f2',
        padding: '6px 12px',
        '& .icon': {
            marginRight: 5,
            width: 24,
            height: 'auto',
            fill: '#f2f2f2',
        },
        '&:hover': {
            backgroundColor: '#3d465465'
        }
    },
    btnGroup: {
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 10
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '12ch',
          '&:focus': {
            width: '20ch',
          },
    },
  }
}
))

export default useClasses