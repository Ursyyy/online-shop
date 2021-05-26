import { createMuiTheme, makeStyles } from '@material-ui/core/styles'

// const backCol = '#EFDBCB'
const infoCol = '#4BB4DE'
const primCol = '#3B8AC4'
const secondaryColor = '#345DA7'

const useClasses = makeStyles((theme) => ({
    body: {
        padding: '0 50px 70px'
    }
}))

const Theme = createMuiTheme({
    palette: {
        primary: {
            main: primCol,
        },
        secondary: {
            main: secondaryColor
        },
        info: {
            main: infoCol,
            light: '#c3eafa'
        }
    }
})

export default useClasses
export {Theme}