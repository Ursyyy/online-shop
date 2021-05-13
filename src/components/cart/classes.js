import { makeStyles } from '@material-ui/core/styles'

const useClasses = makeStyles(theme => ({
    dialog: {
        '& .MuiPaper-root': {
            zIndex: 5,
            minWidth: 300,
            border: '1px solid #dadce0',
            borderRadius: 12,
            padding: '5px 8px 8px',
            pageBreakInside: 'avoid',
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
        '& .MuiOutlinedInput-root': {
            transition: 'all .5s ease-out',
            marginBottom: 12,
        }, 
        '& .emptyCart': {
            padding: '100px 200px',
            '& svg':{
                width: 150,
                height: 'auto' 
            },
            '& .title': {
                textAlign: 'center',
                fontSize: 18,
                fontWeight: 600,
                marginTop: 25
            }
        }       
    },
    
}))

export default useClasses