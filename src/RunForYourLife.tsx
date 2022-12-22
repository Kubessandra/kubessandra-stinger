import {
	AbsoluteFill,
	interpolate,
	Loop,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {LogoRun} from './LogoWalk';

interface RunForYourLifeProps {
	url: string;
  speed: number;
}

export const RunForYourLife = (props: RunForYourLifeProps) => {
	const {url, speed} = props;
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();
  const width = 1920;

  const mass = interpolate(speed, [0, 10], [1, 0]);

	const spr = spring({
		frame,
		fps,
		durationInFrames: 90,
		config: {
			damping: 30,
      mass,
		},
	});

	const wOffset = interpolate(spr, [0, 1], [-250, width + 100]);

	return (
		<AbsoluteFill
			style={{
				left: wOffset,
			}}
		>
			<Loop durationInFrames={30}>
				<LogoRun url={url} />
			</Loop>
		</AbsoluteFill>
	);
};
