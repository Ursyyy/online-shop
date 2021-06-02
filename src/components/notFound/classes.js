import {makeStyles} from '@material-ui/core/styles'

const useClasses = makeStyles( theme => ({
    root: {
        display: 'flex',
        '& .block': {
            textAlign: 'center',
            margin: '100px auto',
            '& p': {
                marginTop: 15,
                fontSize: 20,
                fontFamily: 'Montserrat'
            }
        }
    }
}))

export default useClasses