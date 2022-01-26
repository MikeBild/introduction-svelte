import casual from 'casual';

export default {
	Comment: () => ({
		id: casual.uuid,
		authorId: casual.email,
		text: casual.words(600)
	}),
	Query() {
		return {
			comments: [...new Array(casual.integer(2, 6))]
		};
	}
};
