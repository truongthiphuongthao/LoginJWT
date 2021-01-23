const Model = require('./model')

async function main(){
	await Model.Post.deleteMany({})
	await Model.Comment.deleteMany({})
	for(let i = 0; i<20; ++i) {

		let post = new Model.Post({
			post_content: `hello ${i}-th post`,
			//image_links: ["https://www.w3schools.com/html/pic_trulli.jpg"]
			image_links: ["https://www.w3schools.com/html/pic_trulli.jpg", "https://www.w3schools.com/html/img_girl.jpg", "https://www.w3schools.com/html/img_chania.jpg"]
		})
		await post.save()
		console.log(`Inserted post ${i}-th`)

		for(let j = 0; j<3; j++){
			let comment = new Model.Comment({
				comment_details: `comment ${j}-th comment`,
				post_id : post._id
			})
			await comment.save()
			console.log(`Inserted comment ${j}-th of post ${i}`)
		}

	}
}

main()
