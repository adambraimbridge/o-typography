=>import oTypography from './src/js/typography'

const constructAll = function() {
	oTypography.init();
	document.removeEventListener('o.DOMContentLoaded', constructAll)
};

document.addEventListener('o.DOMContentLoaded', constructAll);

export default oTypography;
