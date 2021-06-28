function ProfilePic(props) {

	const fName = props.personalData.fName;
	const lName = props.personalData.lName;
	const profileImg = props.personalData.img;
	return (
		<div className="p-4">
			<div className="img-circle text-center mb-3">
				<img src={profileImg} width="120px" height="100px" className="shadow" alt="Profile Pic" />
			</div>
			<h4 className="text-center">Hi, {fName} {lName}</h4>
		</div>
	);
}

export default ProfilePic;