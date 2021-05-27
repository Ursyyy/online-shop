import { makeStyles } from '@material-ui/core/styles'

const useClasses = makeStyles(theme => ({
    container: {
        padding: '25px 25px',
        display: 'flex',
        
    },
    order: {
        '& .order-total': {
            height: 50,
            width: '25%',
            padding: 16,
            backgroundColor: '#f5f5f5',
            borderRadius: 4,
            border: '1px solid #e9e9e9',
            position: 'sticky',
            top: 20,
            // width: 284,
            flexShrink: 0,
            marginLeft: 30
        },
        // width: '80%',
        borderTop: 'solid 1px #e9e9e9',
        margin: 'auto',
        padding: '25px 45px',
        '& .order-title': {
            fontSize: 25,
            fontFamily: 'Montserrat',
            marginBottom: 10,
        },
        '& .title': {
            fontSize: 30,
            fontFamily: 'Montserrat',
        },
        '& .order-body': {
            marginTop: 30,
            display: 'flex',
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
            '& .order-block': {
                paddingTop: 15,
                borderTop: 'solid 1px #e6e6e6',
                marginBottom: 30,
                listStyle: 'none',
            },
            '& .products-list': {
                '& .product-list-item': {
                    display: 'flex',
                    margin: '20px 0',
                },
                '& img': {
                    maxWidth: 56,
                    height: 'auto'
                },
                '& .title': {
                    marginLeft: 10,
                    fontSize: 17,
                    alignSelf: 'center',
                    width: '25%',
                    wordBreak: 'break-all'
                },
                '& .descr-block': {
                    display: 'block',
                    margin: 'auto',
                    '& .descr-name': {
                        textAlign: 'center',
                        color: '#797878',
                        fontSize: 14
                    },
                    '& .descr-price': {
                        fontSize: 14,
                        textAlign: 'center',
                        '&::after': {
                            fontSize: 12,
                            content: '" ₴"'
                        }
                    },
                    '& .descr-value': {
                        textAlign: 'center',
                        fontSize: 14
                    }
                }
            },

            '& .MuiFormControl-root':{
                width: '100%'
            },
            '& .checkbox': {
                padding: '15px 25px',
                width: '100%',
                '&.checked': {
                    boxSizing: 'border-box',
                    borderRadius: 10,
                    border: 'solid 1px ' + theme.palette.primary.main,
                },
            },
            '& .input-address': {
                display: 'flex',
                '& .input-title': {
                    color: '#797878',
                    fontSize: 15,
                    '&.half': {
                        textAlign: 'center'
                    },
                },

                '& .input-field': {
                    marginRight: 15,
                    '&.half':{
                        width: 80,
                        margin: '0 15px'
                    }

                }
            },
            '& .input-payment': {
                fontSize: 16,
                color: '#797878',
                border: 'solid 1px #e9e9e9',
                borderRadius: 10,
                marginLeft: 50,
                margin: '10px 0',
                width: 230,
                padding: '15px 20px',
                '& .input-card': {
                    // width: '50%'
                },
                '& .input-support': {
                    marginTop: 15,
                    display: 'flex',
                    '& .card-block': {
                        width: '75%'
                    },
                    '& .input-date': {
                        maxWidth: '28%',
                    },
                    '& .separator': {
                        fontSize: 21,
                        margin: 7
                    },
                    '& input': {
                        textAlign: '-webkit-center'
                    }
                }
            }
        }
    }
}))

export default useClasses