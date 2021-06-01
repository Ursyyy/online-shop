import {makeStyles} from '@material-ui/core/styles'

const useClasses = makeStyles( theme => ({
    root: {
        '& .MuiDialog-container': {
            position: 'absolute',
            display: 'block',
            top: 30,
            left: 45,
            maxWidth: 650,
            // width: '30%'
        }
        
    },
    content: {
        display: 'flex',
        maxWidth: 530,
        '& .category-list': {
            marginBlock: 'unset',
            width: 265,
            listStyle: 'none',
            paddingInline: 'unset',
            
            position: 'relative',
            '& .list-item': {
                lineHeight: '31px',
                fontSize: 14,
                color: theme.palette.primary.main,
                paddingRight: 14,
                paddingLeft: 7,
                '& .title-block': {
                    display: 'inline-flex',
                    '& svg': { 
                        position: 'absolute',
                        right: 15,
                        marginTop: 5,
                        fill: theme.palette.primary.main,
                    }
                },
                '&:hover': {
                    color: theme.palette.secondary.main
                }
                
            }
        },
        '& .subcategory-list': {
            marginBlock: 'unset',
            width: 265,
            listStyle: 'none',
            paddingInline: 'unset',
        }
    }
}))

export default useClasses