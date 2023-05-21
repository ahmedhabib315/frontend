import UrlShortnerForm from "./UrlShortnerForm"
import UrlTable from "./UrlTable";

function UrlShortner() {
	return (
		<>
			<div className="md:container mx-auto px-20">
				<UrlShortnerForm />
				<UrlTable />
			</div>

		</>
	)
}

export default UrlShortner;