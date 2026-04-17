import Image, { type ImageProps } from 'next/image'

type AvatarImageProps = ImageProps

export const AvatarImage = ({
  src,
  alt,
  width = 40,
  height = 40,
  ...rest
}: AvatarImageProps) => {
  return <Image {...rest} alt={alt} height={height} src={src} width={width} />
}
