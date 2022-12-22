import {
	AbsoluteFill,
	interpolate,
	Sequence,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {FinalOne} from './FinalOne';

const Matte = () => {
	const frame = useCurrentFrame();
	const {width, fps} = useVideoConfig();

  console.log(width);
	const sp = spring({
		frame,
		fps,
		durationInFrames: 90,
		config: {
			damping: 20,
		},
	});

	const stWidth = interpolate(sp, [0, 1], [0, (width / 2) + 100]);

	return (
		<AbsoluteFill
			style={{
				background: 'white',
				width: stWidth,
			}}
		/>
	);
};

export const Stinger = () => {
	const {width} = useVideoConfig();

	return (
		<AbsoluteFill>
			<AbsoluteFill
				style={{
					width: width / 2,
				}}
			>
				<FinalOne />
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					width: width / 2,
					left: width / 2,
					background: 'black',
				}}
			>
				<Sequence from={20}>
					<Matte />
				</Sequence>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
