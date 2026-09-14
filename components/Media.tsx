import { assetSource, assets, type AssetId } from '@/data/assets';

type PictureProps = {
  assetId: AssetId;
  className?: string;
  imageClassName?: string;
  eager?: boolean;
  decorative?: boolean;
};

export function Picture({
  assetId,
  className,
  imageClassName,
  eager = false,
  decorative = false,
}: PictureProps) {
  const asset = assets[assetId];

  return (
    <picture className={className}>
      <source media="(max-width: 720px)" srcSet={assetSource(asset, 'sm')} />
      <img
        className={imageClassName}
        src={assetSource(asset, 'lg')}
        alt={decorative ? '' : asset.alt}
        width={asset.width}
        height={asset.height}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : 'auto'}
        decoding="async"
      />
    </picture>
  );
}
