import { makeStyles } from '@material-ui/core/styles'

const useClasses = makeStyles(theme => ({
    dialog: {
        '& .MuiPaper-root': {
            zIndex: 5,
            minWidth: 300,
            border: '1px solid #dadce0',
            borderRadius: 12,
            padding: '5px 8px 15px',
            pageBreakInside: 'avoid',
            // WebkitTransition: 'background-color 200ms cubic-bezier(0.0,0.0,0.2,1)',
        }
    },
    title: {
        borderBottom: 'solid 1px #a6a5a5',
        color: '#000000cc',
        marginBottom: 10,
        padding: '5px 5px 16px 18px',
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
        display: 'flex',
        '& .MuiFormControl-root':{
            marginBottom: 12,
        },
        '& .MuiOutlinedInput-root': {
            transition: 'all .5s ease-out',
            borderRadius: 6,
            '& input': {
                padding: '8px 10px',
                width: 280,
            },
            '& fieldset': {
                transition: 'all .2s ease-out',
                '&:hover': {
                    borderColor: '#00000055',
                    borderRadius: 15
                }
                
            }
        },
        '& .label': {
            fontSize: 13,
            color: '#00000080',
            marginBottom: 3,
        },        
    },
    setAuth: {
        textAlign: 'center',
        margin: '10px 10px 10px 0',
        '& a': {
            textDecoration: 'none',
            color: theme.palette.primary.main,
            
        },
        '& a:hover': {
            cursor: 'pointer',
            color: '#345DA7'
        }
    }
}))

export default useClasses