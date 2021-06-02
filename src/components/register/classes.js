import { makeStyles } from '@material-ui/core/styles'

const useClasses = makeStyles(theme => ({
    content: {
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
    loginForm: {
        borderRight: 'solid 1px #a6a5a5',
        paddingRight: 19,
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
        }
    },
    servicesBtn: {
        display: 'block',
        width: 150,
        margin: '25px auto',
        padding: '0 43px',
        '& .label': {
            fontSize: 15,
            color: '#00000080',
            textAlign: 'center',
            margin: '-15px 0 0 30px',
        },
        '& .connectBtn': {
            textTransform: 'capitalize',
            margin: 7,
            color: '#345DA7aa',
            padding: '5px 15px',
            fontSize: 19,
            fontWeight: 500,
            backgroundColor: "#00000015",
            border: 'solid 1px #00000020',
            borderRadius: 6,
            minWidth: 170,
            transition: 'all .2s ease-out',
            '&:hover': {
                color: '#345DA7dd'
            }
        },
        '& svg': {
            width: 16,
            height: 'auto',
            marginRight: 5,
            paddingBottom: 3
        },
    },
    checkBox: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
        '& .MuiCheckbox-colorPrimary.Mui-checked:hover': {
            backgroundColor: 'transparent',
        }
    },
    loginBtn: {
        display: 'flex', 
        '& .btn': {
            textTransform: 'capitalize',
            color: '#fff',
            fontSize: 16,
            margin: '0 auto',
            fontWeight: 600,
            backgroundColor: "#3B8AC4ee",
            borderRadius: 7,
            padding: '7px 80px',
            '&:hover': {
                backgroundColor: "#3B8AC4bb",
            }
        }
    },
    register: {
        textAlign: 'center',
        '& a:hover': {
            cursor: 'pointer',
            color: '#345DA7'
        }
    }
}))

export default useClasses