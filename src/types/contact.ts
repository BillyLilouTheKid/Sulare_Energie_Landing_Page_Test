type ImageData = {
    height: number,
    width: number,
    src: string,
    alt: string
}

export type ContactNav = {
  title: string;
  links: (string | ImageData)[];
  uppercase?: boolean
};