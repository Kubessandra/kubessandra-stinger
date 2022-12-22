import {Composition} from 'remotion';
import { FinalOne } from './FinalOne';
import {GradientWithMatte} from './GradientWithMatte';
import { LogoRun } from './LogoWalk';
import {RunForYourLife} from './RunForYourLife';
import { Stinger } from './Stinger';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="LogoRun"
				component={() => <LogoRun url="/golang.png" />}
				durationInFrames={45}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="GradientWithMatter"
				component={GradientWithMatte}
				durationInFrames={90}
				fps={30}
				width={1920 * 2}
				height={1080}
			/>
			<Composition
				id="RunForYourLife"
				component={() => <RunForYourLife url="/php.png" speed={9} />}
				fps={30}
				width={1920}
				height={1080}
				durationInFrames={90}
			/>
			<Composition
				id="FinalOne"
				component={FinalOne}
				fps={30}
				width={1920}
				height={1080}
				durationInFrames={90}
			/>
			<Composition
				id="Stinger"
				component={Stinger}
				fps={30}
				width={3840}
				height={1080}
				durationInFrames={90}
			/>
		</>
	);
};
