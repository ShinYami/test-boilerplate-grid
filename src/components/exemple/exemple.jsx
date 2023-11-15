

export default function Exemple() {
	const array = [1, 2, 3]

	return (
		<section className="ctn">
			<div>
				<div class="col-10 mlg-1">
					<h1 class="">Hero Section</h1>
		
					<p class="col-4 cf">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nihil repellat atque fuga quod incidunt earum, totam suscipit eum.</p>
				</div>
			</div>
			<ul className="flex row row--nowrap">
				{array.map((item, index) => (
					<li key={index} className="bg-white col-4 t:col-2 m:col-4">
						<span>hello</span>
					</li>
				))}
			</ul>
		</section> 
	)
}