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
                    color: theme.palette.secondary.main,
                    textDecoration: 'underline',
                    cursor: 'pointer'
                }
                
            }
        },
        '& .subcategory-list': {
            marginBlock: 'unset',
            width: 265,
            listStyle: 'none',
            paddingInline: 'unset',
            '& .second-stage-item': {
                textTransform: 'capitalize',
                marginBottom: 4,
                paddingLeft: 12,
                paddingRight: 12,
                fontSize: 16,
                lineHeight: '18px',
                color: theme.palette.secondary.light,
                '& .cat-name:hover': {
                    color: theme.palette.secondary.dark,
                    textDecoration: 'underline',
                    cursor: 'pointer'
                },
                '& .last-stage': {
                    listStyle: 'none',
                    marginBottom: 4,
                    marginBlock: 0,
                    marginInline: 0,
                    paddingInline: 0,
                    '& .third-stage-item': {
                        padding: '2px 12px',
                        fontSize: 13,
                        lineHeight: '15px',
                        color: "#4b4b4b",
                        '&:hover': {
                            textDecoration: 'underline',
                            cursor: 'pointer'
                        }
                    }
                }
            }
        }
    }
}))

export default useClasses