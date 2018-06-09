import React from 'react';

const Stringify = ({ data, loading }) => {
	if (loading) { return null; }

	return (
		<pre>
			{JSON.stringify(data, null, 2)}
		</pre>
	);
};

export default Stringify;
