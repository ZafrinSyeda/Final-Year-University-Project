import React, { useState } from "react";
/* stylesheet */
import "./Profile.css";
/* Images */
import vinylgirlpfp from "../resources/vinylgirlpfp.jpeg";
import vinylgirlpost from "../resources/vinylgirlpost.jpeg";
import onur from "../resources/onur.jpg";
import dressmannequin from "../resources/dressmannequin.jpeg";
import shirtdesign from "../resources/shirtdesign.jpeg";
/* MUI Imports */
import ChatIcon from "@material-ui/icons/Chat";
import FavoriteIcon from "@material-ui/icons/Favorite";
import StarIcon from "@mui/icons-material/Star";

const Feed = () => {
	const friendPosts = [
		{
			username: "Celestina Benedetti",
			profile_pic: vinylgirlpfp,
			id: "celestina1",
			title: "my collection grows!",
			post_img: vinylgirlpost,
			date: "03 / 04 / 2021",
			description: "aaa i'm so happy i finally got my hands on this one :D!",
		},
		{
			username: "Onur Stanton",
			profile_pic: onur,
			id: "onur1",
			title: "Making a dress for my mum's birthday",
			post_img: dressmannequin,
			date: "02 / 04 / 2021",
			description:
				"I'm so grateful for everything my mum has done for me so here is a small way of paying her tribute. It all started since the day I was born, when she started doing so much for me. One of my fondest memories is of Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim diam vulputate ut pharetra sit amet aliquam. Nec ullamcorper sit amet risus nullam eget. Et netus et malesuada fames ac turpis. Placerat in egestas erat imperdiet sed. Ultricies mi quis hendrerit dolor magna eget est. Purus non enim praesent elementum facilisis leo vel fringilla est. Sociis natoque penatibus et magnis dis. Imperdiet proin fermentum leo vel orci. Pretium fusce id velit ut tortor pretium viverra.  and i am so grateful  Ɛ> ",
		},
		{
			username: "Onur Stanton",
			profile_pic: onur,
			id: "onur2",
			title: "New Shirt Design",
			post_img: shirtdesign,
			date: "01 / 04 / 2021",
			description: "idc Ɛ>",
		},
	];

	const FeedPost = ({ post }) => {
		const [showComments, setShowComments] = useState(false);
		const [like, setLike] = useState(false);
		const [inspire, setInspire] = useState(false);
		return (
			<div>
				<div className="feedPost" key={post.id}>
					<div className="profileDetails">
						<img src={post.profile_pic} className="profilePictureSm" />
						{post.username}
					</div>

					<div>
						<img src={post.post_img} className="feedImg" />
						<h3>{post.title}</h3>
						<p>{post.description}</p>
						<p>View 25 Comments</p>
					</div>
					<div className="feedInteractions">
						<button>
							<ChatIcon style={{ fontSize: 33 }} />
						</button>
						<button onClick={() => setInspire(!inspire)}>
							<StarIcon
								style={{ fontSize: 33 }}
								color={inspire ? "warning" : "default"}
							/>
						</button>
						<button onClick={() => setLike(!like)}>
							<FavoriteIcon
								style={{ fontSize: 33 }}
								color={like ? "error" : "default"}
							/>
						</button>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className="page">
			<div className="container">
				<h1>My Feed</h1>
				{friendPosts.map((post) => (
					<FeedPost key={post.id} post={post} />
				))}
				;
			</div>
		</div>
	);
};

export default Feed;
