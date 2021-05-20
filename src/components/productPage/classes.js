import { makeStyles } from '@material-ui/core/styles'

const useClasses = makeStyles(theme => ({
    container: {
        padding: '55px 100px',
    },
    title: {
        fontSize: 40,
        fontFamily: 'Montserrat' ,
        textTransform: 'uppercase',
        marginBottom: 15
    },
    content: {
        display: 'flex',
        '& .img-display': {
            maxWidth: '50%',
            display: 'flex',
            '& .main-img':{
                margin: 'auto',
                '& img': {
                    maxWidth: 340,
                    height: 'auto'
                }
            },
            '& .img-list': {
                listStyle: 'none',
                '& .item': {
                    padding: 2,
                    '& img': {
                        width: 65,
                        margin: '0 5px 5px 0',
                        
                    },
                    '&:hover': {
                        border: '1px solid #e9e9e9',
                        borderRadius: 10,
                        boxSizing: 'border-box',
                    }
                }
            }
        },
        '& .price-display': {
            padding: 15,
            display: 'flex',
            border: '1px solid #e9e9e9',
            height: 'max-content',
            '& .price': { 
                color: '#e84343',
                fontSize: 23,
                fontWeight: 500,
                margin: 'auto 15px',
                "&::after":{
                    content: 'k'
                }
            },
            '& .buy-button': {
                background: '#3B8AC4',
                color: '#fff',
                padding: '8px 50px'
            }
        }
    }

}))

export default useClasses