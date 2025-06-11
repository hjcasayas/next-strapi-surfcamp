import { InfoBlockComponent } from './info-block.component';
import { InfoBlock } from '../_interfaces/info-block.interface';

interface InfoBlocksComponentProps {
  infoBlocks: InfoBlock[];
}

export const InfoBlocksComponent = ({
  infoBlocks,
}: InfoBlocksComponentProps) => {
  return (
    <div className="flex flex-col justify-center gap-y-14">
      {infoBlocks.map(({ slug, ...infoBlock }: InfoBlock) => {
        return <InfoBlockComponent key={slug} {...infoBlock} />;
      })}
    </div>
  );
};
