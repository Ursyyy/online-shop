import { makeStyles } from '@material-ui/core/styles'

const useClasses = makeStyles(theme => ({

    resetForm: {
        maxWidth: 300,
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
        '& .secondary': {
            marginBottom: 7,
            // width: '75%',
            '& .descr': {
                color: '#00000080',
                fontSize: '0.75em',
                marginTop: -7,
                marginBottom: 12,
            },
            
        } 
    },
    resetBtn: {
        display: 'flex', 
        '& .btn': {
            textTransform: 'capitalize',
            color: '#fff',
            fontSize: 16,
            margin: 'auto',
            marginTop: 12,
            fontWeight: 600,
            backgroundColor: "#3B8AC4ee",
            borderRadius: 7,
            padding: '7px 80px',
            '&:hover': {
                backgroundColor: "#3B8AC4bb",
            }
        }
    },
}))

export default useClasses