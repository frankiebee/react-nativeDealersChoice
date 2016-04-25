
var url = `http://localhost:3000/tags?={tag.id}`;


var swiper = React.createClass({
	render: function() {
		return (
			<Swiper style={styles.wrapper> showsButtons={true}>
				<View style={styles.slide1}>
					<Text style={styles.text}>Hello Swiper</Text>
				</View>
				<View style={styles.slide2}>
					<Text style={styles.text}>Beautiful</Text>
				</View>
			</Swiper>
		)
	}

// from class render method
		return (
		<View style={styles.mainContainer}>
			<Text style={styles.titleText}>
				Spiritous or Gentle?
			</Text>
		</View>
		);



		renderResults() {
		var {treeJSON, isLoading} = this.state;
		if( !isLoading ) {
			return (
				<Swiper style={styles.wrapper} showsButtons={true}>
						{treeJson.map((tag, index) => {
							return (
								<View style={styles.slide1}>
									<Text key={index} style={styles.text}>{tag.name}</Text>
								</View>
							)
						})}
				</Swiper>
			);
		}
	}

		