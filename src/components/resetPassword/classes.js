import {makeStyles} from '@material-ui/core/styles'

const useClasses = makeStyles( theme => ({
    root: {
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
    resetForm: {
        padding: 19,
        width: 300,
        margin: '50px auto',
        border: 'solid 1px #d6d6d6',
        borderRadius: 8,
        '& .secondary': {
            '& .descr': {
                color: '#00000080',
                fontSize: '0.75em',
                marginTop: -7,
                marginBottom: 12,
                "& a": {
                    paddingTop: 9,
                    marginLeft: 'auto',
                    cursor: 'pointer',
                    '&:hover': {
                        color: '#345DA7'
                    }
                },
            }
        },
    },
    button: {
        display: 'flex',
        '& .reset-btn': {
            textTransform: 'capitalize',
            color: '#fff',
            fontSize: 16,
            marginLeft: 'auto',
            fontWeight: 600,
            backgroundColor: "#3B8AC4ee",
            borderRadius: 7,
            padding: '7px 80px',
            '&:hover': {
                backgroundColor: "#3B8AC4bb",
            }
        }
    }
}))

export default useClasses