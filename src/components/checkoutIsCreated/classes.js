import {makeStyles} from '@material-ui/core/styles'

const useClasses = makeStyles( theme => ({
    root: {
        display: 'flex',
        '& .block': {
            margin: '150px auto' ,
            '& svg': {
                with: 150
            },
            '& .description': {
                fontSize: 20,
                marginTop: 35,
                fontFamily: 'Montserrat',
                colot: '#797979'
            }
        }
    }
}))

export default useClasses