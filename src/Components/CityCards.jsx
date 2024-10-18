import PropTypes from 'prop-types';

const CityCard = ({ city, onClick }) => {
	return (
		<div
			onClick={onClick}
			aria-label={`Select city: ${city}`} // Adds accessibility
			className="city-card glassCard w-[8rem] h-[3rem] p-2 cursor-pointer flex flex-col justify-center items-center text-center opacity-75 hover:opacity-100 transition-opacity transform hover:scale-105"
		>
			<p className="font-bold text-lg">{city}</p>
		</div>
	)
}

CityCard.propTypes = {
	city: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};

export default CityCard;
