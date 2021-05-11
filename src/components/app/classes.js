import { createMuiTheme, makeStyles } from '@material-ui/core/styles'

const backCol = '#EFDBCB'
const primCol = '#4BB4DE'
const secCol = '#3B8AC4'
const thirdCol = '#345DA7'

const useClasses = makeStyles((theme) => ({
    body: {
        backgroundColor: backCol
    }
}))

const Theme = createMuiTheme({
    palette: {
        primary: {
            main: secCol,
        },
        secondary: {
            main: thirdCol
        }
    }
})

export default useClasses
export {Theme}