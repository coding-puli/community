import React, {useState} from "react";
import FixedImage from "./index";


export default function FixedImageContainer(props){
	const {children, url} = props;
	const [renderContent, setRenderContent] = useState(false);

	function imageLoadedHandler(){
		setRenderContent(true);
	}

	return (
		<>
			{renderContent ? children : null}
			<FixedImage url={url} onImageLoaded={imageLoadedHandler}/>
		</>
	);
}