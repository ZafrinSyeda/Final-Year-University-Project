import React, { useState } from "react";
/* stylesheet */
import "./Profile.css";
/* Images */

import vinylgirlpost from "../resources/vinylgirlpost.jpeg";
import vinylgirlpfp from "../resources/vinylgirlpfp.jpeg";
import onur from "../resources/onur.jpg";
import dressmannequin from "../resources/dressmannequin.jpeg";
import shirtdesign from "../resources/shirtdesign.jpeg";
import profilepicture from "../resources/profilepicture.PNG";
import personpfp from "../resources/personpfp.jpg";
import paintingpfp from "../resources/paintingpfp.jpg";
/* MUI Imports */
import ChatIcon from "@material-ui/icons/Chat";
import FavoriteIcon from "@material-ui/icons/Favorite";
import StarIcon from "@mui/icons-material/Star";
/* unique ID import */
import { v4 as uuidv4 } from "uuid";

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
		const [postComments, setPostComment] = useState([
			{
				username: "Makayla Madelynn Kovačić",
				profile_pic: profilepicture,
				id: "makaylacomment",
				message: "This is amazing!",
			},
			{
				username: "Keshawn Chance",
				profile_pic: paintingpfp,
				id: "keshawncomment",
				message: "This inspires me :)",
			},
			{
				username: "Miki O'Callaghan",
				profile_pic: personpfp,
				id: "mikicomment",
				message: "WOW!!",
			},
		]);

		const [showComments, setShowComments] = useState(false);
		const [comment, setComment] = useState("");
		const [like, setLike] = useState(false);
		const [inspire, setInspire] = useState(false);

		const UserPost = () => {
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
							<p className="desc">{post.description}</p>
							<button
								className="showCommentBtn"
								onClick={() => setShowComments(!showComments)}
							>
								View {postComments.length} Comments
							</button>
						</div>
						<div className="feedInteractions">
							<button onClick={() => setShowComments(!showComments)}>
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

		const addComment = (e) => {
			e.preventDefault();
			console.log("good comment");
			let postComment = {
				username: "Makayla Madelynn Kovačić",
				profile_pic: profilepicture,
				id: uuidv4(),
				message: comment,
			};
			const newComment = [...postComments, postComment];
			setPostComment(newComment);
			setComment("");
		};

		const Comments = () => {
			return (
				<div className="postComments">
					<h3>Comments ({postComments.length})</h3>

					<div className="commentContainer">
						{postComments.map((comment) => (
							<div className="postComment" key={comment.id}>
								<div className="profileDetails">
									<img src={comment.profile_pic} className="profilePictureSm" />
									{comment.username}:<p></p>
								</div>
								<div className="commentContent">{comment.message}</div>
								<hr />
							</div>
						))}
					</div>

					<form className="commentForm" onSubmit={addComment}>
						<img src={profilepicture} className="profilePictureSm" />
						<input
							type="text"
							placeholder="Enter a message"
							onChange={(e) => setComment(e.currentTarget.value)}
							value={comment}
							pattern="[^' ']+"
						/>
						<button className="commentBtn" disabled={comment == ""}>
							{" "}
							send
						</button>
					</form>
					<button className="commentBtn" onClick={() => setShowComments(false)}>
						Back to post
					</button>
				</div>
			);
		};

		return <div>{showComments ? <Comments /> : <UserPost />}</div>;
	};

	return (
		<div className="page">
			<div className="container">
				<h1>My Feed</h1>
				{friendPosts.map((post) => (
					<FeedPost key={post.id} post={post} />
				))}
			</div>
		</div>
	);
};

export default Feed;
