import {
	Easing,
	Img,
	interpolate,
	staticFile,
	useCurrentFrame,
} from 'remotion';

interface LogoRunProps {
	url: string;
}

export const LogoRun = (props: LogoRunProps) => {
	const {url} = props;
	const frame = useCurrentFrame();

	const walk = interpolate(frame, [0, 15, 30], [-20, 20, -20], {
		easing: Easing.ease,
	});

	return (
		<Img
			style={{
				height: 200,
				transform: `rotate(${walk}deg)`,
				objectFit: 'contain',
			}}
			src={staticFile(url)}
		/>
	);
};
