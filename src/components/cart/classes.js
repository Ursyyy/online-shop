import { makeStyles } from '@material-ui/core/styles'

const useClasses = makeStyles(theme => ({
    dialog: {
        '& .MuiPaper-root': {
            zIndex: 5,
            minWidth: 500,
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
    productsList: {
        listStyle: 'none',
        paddingInlineStart: 0,
        '& .product-item': {
            marginBottom: 20,
            display: 'flex',
            '& img': {
                maxWidth: 70,
                maxHeight: 70
            },
            '& .title': {
                fontFamily: 'Montserrat',
                fontSize: 22,
                marginLeft: 10,
                minWidth: 150,
            },
            '& .quantity': {
                margin: 'auto 10px auto 30px',
                padding: '4px 4px',
                display: 'flex',
                '& .quantity-count': {
                    padding: '7px 3px',
                    textAlign: 'center',
                    appearance: 'none',
                    textDecoration: 'none',
                    borderRadius: 5,
                    width: 30,
                    border: 'solid 1px #e9e9e9',
                    '&:hover': {
                        borderColor: '#a6a5a5'                 
                    },
                    '&:focus-visible': {
                        borderColor: '#a6a5a5'
                    }
                },
                '& .change-count': {
                    fontSize: 30,
                    margin: '0 8px',
                    color: '#3B8AC4',
                    '&:hover': {
                        cursor: 'pointer'
                    },
                    '&.disabled': {
                        color: '#a6a5a5',
                        '&:hover': {
                            cursor: 'default'
                        },
                    }
                }
            }
        }
    }
    
}))

export default useClasses