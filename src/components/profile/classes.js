import {makeStyles} from '@material-ui/core/styles'

const useClasses = makeStyles(theme => ({
    root: {
        display: 'flex',
        padding: 15,
        '& .none': {
            display: 'none'
        }
    },
    btnTabs: {
        listStyle: 'none',
        width: 300,
        // borderBottom: 'solid 1px #e9e9e9',
        borderTop: 'solid 1px #e9e9e9',
        marginBlock: 0,
        padding: 10,
        fontSize: 14,
        transition: 'all .2s ease-in-out',
        '& .btn-item': {
            padding: '10px 20px',
            marginBottom: 5,
            borderRadius: 8,
            '&:hover': {
                background: theme.palette.info.light,
                cursor: 'pointer'
            },
            '&.checked': {
                background: theme.palette.info.light,
            }
        },

    },
    personalData: {
        padding: 40,
        borderLeft: 'solid 1px #e9e9e9',
        width: '100%',
        '& .title': {
            fontSize: 36,
            marginBottom: 24,
            fontFamily: 'Montserrat'
        },
        '& .info-block': {
            border: 'solid 1px #e9e9e9',
            borderRadius: 8,
            marginBottom: 8,
            padding: 16,
            
            '& .header': {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                minHeight: 40,
                marginBottom: 16,
                '& .info-title': {
                    fontSize: 20,
                    fontFamily: 'Montserrat',
                    display: 'flex',
                    '& svg': {
                        marginTop: 5,
                        width: 17,
                        height: 17,
                        marginRight: 10,
                    }
                },
            },
            '& .editBtn': {
                display: 'none',
                color: theme.palette.primary.main,
                textTransform: 'none',
                fontWeight: 400,
                padding: 1,
                '& svg': {
                    marginRight: 5,
                    fill: theme.palette.primary.main,
                    marginBlockEnd: 3
                },
                '&:hover': {
                    background: 'none',
                    color: theme.palette.secondary.main,
                    '& svg': {
                        fill: theme.palette.secondary.main
                    }
                    
                }
            },
            '& .info-line': {
                display: 'flex',
                marginLeft: 32,
                '& .label': {
                    marginBottom: 8,
                    fontSize: 12,
                    color: '#797878'
                },
                '& .value': {
                    fontSize: 14
                },
                '& .item': {
                    width: '50%'
                }
            }
        }
    },
    orderList: {
        padding: 40,
        borderLeft: 'solid 1px #e9e9e9',
        width: '100%',
        '& ul': {
            listStyle: 'none',
        },
        '& .list-item': {
            display: 'flex',
            padding: 16,
            border: '1px solid #e9e9e9',
            borderRadius: 4,
            marginBottom: 8,
            justifyContent: 'space-between',
            '& .block-title': {
                fontSize: 12,
                color: '#797878'
            },
            '& .order-status': {
                fontSize: 14,
            },
            '& .order-summary': {
                fontSize: 14,
                width: '100%',
                '&::after': {
                    content: '" ₴"',
                    fontSize: 12
                }
            },
            '& .order-products': {
                textAlign: 'center'
            },
            '& ul': {
                marginBlock: 0,
                width: '100%',
                padding: '0 14px'
            },
            '& .products':{
                display: 'flex',
                justifyContent: 'space-between',
                '& .product-name': {
                    fontSize: 14
                },
                '& .product-price::after': {
                        content: '" ₴"',
                        fontSize: 12
                }

            }
            
        },
        '& .title': {
            fontSize: 36,
            marginBottom: 24,
            fontFamily: 'Montserrat'
        },
    },
    emptyOrder: {
        textAlign: 'center',
        '& .title': {
            fontSize: 20,
            fontFamily: 'Montserrat'
        },
        '& svg': {
            width: 350,
            height: 450,
        }
    }
})) 

export default useClasses