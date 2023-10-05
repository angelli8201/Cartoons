function FormErrors({ errors }) {
	if (!errors || !errors.length) return null;

	return (
		<section className='alert alert-danger' role='alert'>
			<h2>Errors</h2>
			<p>The following errors occurred:</p>
			<ul>
				{errors.map((error, index) => (
					<li key={`${index}-${error}`}>{error}</li>
				))}
			</ul>
		</section>
	);
}

export default FormErrors;
