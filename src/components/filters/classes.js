import { makeStyles } from "@material-ui/core/styles";

const useClasses = makeStyles( theme => ({
	container: {
		width: '15%',
		borderRight: 'solid 1px #e9e9e9',
		borderLeft: 'none',
		borderBottom: 'none',
		padding: '0 0 25px 50px',
	},
	filterList: {
		'& .filter-group': {
			borderTop: 'solid 1px #e9e9e9',
			marginBottom: 10,
			padding: '15px 0',
			width: '100%',
			'& label': {
				width: '100%'
			},
			'& .filter-title': {
				color: theme.palette.secondary.main,
				fontSize: 18,
			},
			'& .filter-item':{ 
				
				'& .MuiTypography-body1': {
					fontSize: 14
				},
				'& .MuiFormControlLabel-root': {
					marginLeft: 0
				},
				'& .MuiCheckbox-root': {
					padding: 6,
					color: '#d2d2d2'
				},
				'& .MuiCheckbox-colorSecondary.Mui-checked': {
					color: theme.palette.primary.main
				},
				'&:hover': {
					background: '#f4faf6'
				},
				'& .MuiCheckbox-colorSecondary.Mui-checked:hover': {
					background: 'none'
				},
				'& .MuiIconButton-colorSecondary:hover': {
					background: 'none'
				}
			},
		}
	}

}))

export default useClasses