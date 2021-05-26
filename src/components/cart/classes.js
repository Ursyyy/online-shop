import { makeStyles } from '@material-ui/core/styles'

const useClasses = makeStyles(theme => ({
    dialog: {
        '& .MuiPaper-root': {
            zIndex: 5,
            minWidth: 650,
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
    cart: {
        width: '100%'
    },
    productsList: {
        listStyle: 'none',
        paddingInlineStart: 0,
        width: '100%',
        '& .product-item': {
            marginBottom: 25,
            display: 'flex',
            '& img': {
                maxWidth: 80,
                maxHeight: 80
            },
            '& .title': {
                fontFamily: 'Montserrat',
                fontSize: 22,
                marginLeft: 10,
                minWidth: 150,
            },
            '& .quantity': {
                margin: 'auto',
                marginRight: 30,
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
                    color: theme.palette.primary.main,
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
            },
            '& .price-block': {
                width: '23%',
                '& .product-price': {
                    marginTop: 24,
                    fontSize: 20,
                    marginRight: 5,
                    '&:after': {
                        content: '" ₴"',
                        fontSize: 17
    
                    }
                },
            },
            '& .icon': {
                fontSize: 20,
                '&:hover': {
                    fill: theme.palette.info.main
                }
            }
            
        }
    },

    orderBlock: {
        display: 'flex',
        '& .create-order':{
            display: 'flex',
            marginLeft: 'auto',
            border: `solid 1px ${theme.palette.primary.main}`,
            borderRadius: 10,
            background: theme.palette.info.light,
            padding: '15px 20px',
            '& .order-price': {
                fontSize: 18,
                margin: 'auto',
                marginRight: 15,
                '&:after': {
                    content: '" ₴"',
                    fontSize: 15
                }
            },
            '& a': {
                textDecoration: 'none'
            },
            '& .create-order-button': {
                background: theme.palette.primary.main,
                color: '#fff',
                padding: '10px 18px',
                borderRadius: 6,
                fontSize: 18,
                textTransform: 'capitalize',
                '&:hover': {
                    background: '#3da0eb'
                }
            }
        },
        
    }
    
}))

export default useClasses