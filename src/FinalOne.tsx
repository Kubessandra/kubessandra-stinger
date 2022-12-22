import {
	AbsoluteFill,
	interpolate,
	random,
	Sequence,
	useVideoConfig,
} from 'remotion';
import {chunk} from 'lodash';
import {logos} from './logos';
import {RunForYourLife} from './RunForYourLife';

const SquadLogo = ({
	logoChunk,
}: {
	logoChunk: string[];
}) => {
	const {height} = useVideoConfig();

	return (
		<div>
			{logoChunk.map((name, i) => {
				const hOffset = interpolate(
					i,
					[0, logoChunk.length],
					[-60, height - 40]
				);
				const r = random(i + name);
				const wOffset = interpolate(r, [0, 1], [-20, 60]);

				const speed = interpolate(r, [0, 1], [4, 9]);

				return (
					<AbsoluteFill
						style={{
							top: hOffset,
							left: wOffset,
						}}
					>
						<RunForYourLife url={`/all-logos/${name}`} speed={speed} />
					</AbsoluteFill>
				);
			})}
			;
		</div>
	);
};

export const FinalOne = () => {
	const logosArr = chunk(logos, 8);

	return (
		<AbsoluteFill>
			<Sequence>
				<AbsoluteFill
					style={{
						top: '40%',
					}}
				>
					<RunForYourLife url="/php.png" speed={1} />
				</AbsoluteFill>
			</Sequence>
			{logosArr.map((logoChunk, i) => {
				return (
					<Sequence from={20 + i * 5}>
						<SquadLogo logoChunk={logoChunk} />
					</Sequence>
				);
			})}
		</AbsoluteFill>
	);
};
