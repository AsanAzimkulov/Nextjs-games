import { FC, useMemo } from "react";

import Image, { ImageProps } from "next/image";

type PropsType = Partial<ImageProps> & {
  imageId: string;
};

const createImageUrl = (id: string) =>
  `https://cdn2.softswiss.net/i/s2/${id}.png`;

export const CustomImage: FC<PropsType> = ({ imageId, ...props }) => {
  const imageUrl = useMemo(() => createImageUrl(imageId), [imageId]);
  //   @ts-ignore
  return <Image src={imageUrl} {...props} />;
};
