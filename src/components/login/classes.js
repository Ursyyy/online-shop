import { makeStyles } from '@material-ui/core/styles'

const useClasses = makeStyles(theme => ({
    dialog: {
        borderRadius: 25
    },
    title: {
        borderBottom: 'solid 1px #00000030',
        '& h2': {
            display: 'flex',
            fontWeight: 600
        },
        
        '& svg': {
            marginLeft: 'auto',
            fill: '#00000088',
            paddingTop: 6,
            '&:hover': {
                fill: '#000000aa'
            }
        }
    },
    content: {
        padding: '10px 24px 10px 15px',
        '& input': {
            padding: '8px 10px',
            width: 280
        },
        '& .label': {
            fontSize: 14,
            color: '#00000090'
        },
        '& .loginBtn': {
            textTransform: 'capitalize',
            color: '#fff'
        }
    }
}))

export default useClasses