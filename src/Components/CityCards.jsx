function CityCard({ city, onClick, isSelected }) {
    return (
        <div
            onClick={onClick}
            className={`cursor-pointer px-4 py-2 rounded-lg transition-colors ${
                isSelected ? "bg-blue-600 text-white" : "bg-gray-200 text-black"
            }`}
        >
            {city}
        </div>
    )
}

export default CityCard
